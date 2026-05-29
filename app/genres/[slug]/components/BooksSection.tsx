import type { CardBooksProps, PaginationProps } from "@/types/types";
import CardBookSimple from '@/components/books/CardBookSimple';
import BrowsePagination from "@/components/Pagination";

type BooksSectionProps = {
    books: CardBooksProps[];
    pagination: PaginationProps;
    currentPage: number;
}

const BooksSection = ({ books, pagination, currentPage }: BooksSectionProps) => {

    return (
        <>
        {books.length > 0 ? (
            <>

            <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                    <CardBookSimple key={book._id} book={book} />
                ))}
            </div>
            <div className="flex justify-center mt-12 pagination">
                <BrowsePagination currentPage={currentPage} totalPages={pagination.totalPages} />
            </div>
            </>
        ) : (
            <div className="text-center text-gray-500 py-12">No books found for this genre.</div>
        )}
        
        </>
    )
}

export default BooksSection