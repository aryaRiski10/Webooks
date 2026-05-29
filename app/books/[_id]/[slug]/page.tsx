import { getBookById} from '@/lib/data';
import { slugify } from '@/lib/utils';
import { BookUser, ChevronRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import BookImage from '@/components/books/BookImage';

type Props = {
    params: Promise<{
      _id: string,
      slug: string
    }>
}
const BookDetail = async ({ params }: Props) => {
  const { _id, slug } = await params
  const book = await getBookById(_id)

  const tags = book.tags.map((tag:any) => (
      <a key={tag.url} className="px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm text-on-surface-variant hover:border-primary hover:text-primary transition-all" href={tag.url}>
        {tag.name}
      </a> 
    )
  )
  const urlBuy = book.buy_links.map((item:any) => item.url)
  const urlAuthor = book.author.url

  return (
    <main className="max-w-7xl flex flex-col mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 px-6 gap-20">
      {/* Hero Section: Cover & Key Info */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-content-gap items-start gap-16">
        {/* Left: Cover Image */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="relative group max-w-full w-full">
            <BookImage
              src={book.cover_image}
              title={book.title}
              className="w-full h-[600px] rounded shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] object-contain p-6"
              width={400}
              height={500}
              loading="eager"
              fallbackSrc={`https://placehold.co/600x400/png?text=${encodeURIComponent(book.title)}`}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded" />
          </div>
        </div>
        {/* Right: Identity & CTA */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div>
            <nav className="flex items-center gap-2 mb-4">
              <Link
                className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                href="/"
              >
                Home
              </Link>
              <ChevronRight />
              <Link
                className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors"
                href={`/books/${book._id}/${slugify(book.title)}`}
              >
                {book.title}
              </Link>
            </nav>
            <h1 className="font-display-lg text-display-lg lg:text-5xl/[120%] text-3xl/[150%] text-on-background mb-2">
              {book.title}
            </h1>
            <div className="flex items-center gap-4">
              <Link
                className="font-headline-md text-headline-md text-xl hover:text-primary transition-colors italic"
                href="#"
              >
                {book.author.name}
              </Link>
              <span className="h-4 w-0.5 bg-orange-300" />
              <span className="font-label-md text-label-md text-xl text-on-surface-variant uppercase tracking-widest">
                {book.publisher}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-headline-lg text-headline-lg text-3xl text-[#ff3232] font-semibold price-text animate-pulse">
              {book.details.price}
            </p>
            <p className="font-label-sm text-label-sm text-xl text-on-surface-variant italic">
              {book.details.format} Edition Style
            </p>
          </div>
          {/* Purchase Options */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href={urlBuy[0]} className="bg-indigo-500 text-white text-on-primary py-4 px-8 font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all active:scale-[0.98] cursor-pointer" target="_blank">
                <ShoppingCart />
                Gramedia
              </Link>
              <Link href={urlAuthor} className="border border-outline text-on-surface py-4 px-8 font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all active:scale-[0.98] cursor-pointer" target="_blank">
                <BookUser />
                Author Profile
              </Link>
              
            </div>
            
          </div>
          <div className="pt-6 border-t border-outline-variant flex gap-8">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                FORMAT
              </span>
              <span className="font-label-md text-label-md">{book.details.format}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                PAGES
              </span>
              <span className="font-label-md text-label-md">{book.details.total_pages}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                ISBN
              </span>
              <span className="font-label-md text-label-md">{book.details.isbn}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Content Below The Fold */}
      <section className="mt-section-gap grid grid-cols-1 md:grid-cols-12 gap-section-gap gap-16">
        {/* Summary Column */}
        <div className="md:col-span-7">
          <h2 className="font-headline-lg text-headline-lg mb-6 border-b border-outline-variant pb-4 text-3xl">
            Summary
          </h2>
          <div className="text-[#544341] space-y-6 text-on-surface-variant font-lg text-lg">
            <p>
              {book.summary}
            </p>
          </div>
          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-3">
            {tags}
          </div>
        </div>
        {/* Specifications Column */}
        <div className="md:col-span-5">
          <div className="bg-[#f0eded] p-8 rounded-xl">
            <h2 className="text-2xl mb-6 uppercase tracking-widest text-on-surface">
              Specifications
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-outline-variant pb-3">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  No. GM
                </span>
                <span className="font-body-md text-body-md">{book.details.no_gm}</span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-variant pb-3">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  ISBN
                </span>
                <span className="font-body-md text-body-md">{book.details.isbn}</span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-variant pb-3">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Total Pages
                </span>
                <span className="font-body-md text-body-md">{book.details.total_pages}</span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-variant pb-3">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Size
                </span>
                <span className="font-body-md text-body-md">
                  {book.details.size}
                </span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-variant pb-3">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Published Date
                </span>
                <span className="font-body-md text-body-md">
                  {book.details.published_date}
                </span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-variant pb-3">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Format
                </span>
                <span className="font-body-md text-body-md">{book.details.format}</span>
              </li>
              <li className="flex justify-between items-center pb-3">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  Publisher
                </span>
                <span className="font-body-md text-body-md">{book.publisher}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookDetail


