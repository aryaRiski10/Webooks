import { getBooksBySearch, getGenres } from "@/lib/data";
import { slugify } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import BooksSection from "./components/BooksSection";
import type { CardBooksProps, PaginationProps } from "@/types/types";

type Props = {
    params: Promise<{slug: string}>;
    searchParams: Promise<{ page?: string }>;
}

type GenreItem = {
    genre: string;
    count: number;
}

type GenreAccumulator = Record<string, GenreItem>;

const GenrePage = async ({ params, searchParams }: Props) => {
    const { slug } = await params;
    const query = await searchParams;
    const dataGenres = await getGenres();
    const genres = dataGenres.genres;
    const pageParam = Number.parseInt(query.page ?? "1", 10);
    const currentPage = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

    const cleanGenres = (genre : string) => {
        return genre.trim().replace(/,$/, '').trim()
    }

    const uniqueGenres: GenreItem[] = Object.values(
        genres.reduce((acc: GenreAccumulator, item: GenreItem) => {
            if (!item.genre?.trim()) return acc;
            const genreName = cleanGenres(item.genre);

            if (!genreName) return acc;

            if (acc[genreName]) {
                acc[genreName].count += item.count;
            } else {
                acc[genreName] = {
                    genre: genreName,
                    count: item.count
                };
            }
            return acc;
        }, {} as GenreAccumulator)
    )

    const genre = uniqueGenres.find((item) => slugify(item.genre) === slug)

    let books: CardBooksProps[] = [];
    let pagination: PaginationProps = {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 20,
        hasNextPage: false,
        hasPrevPage: false,
    };

    if (genre?.genre) {
        const searchResult = await getBooksBySearch({
            genre: genre.genre,
            page: currentPage,
        });

        books = searchResult.books as CardBooksProps[];
        pagination = searchResult.pagination as PaginationProps;
    }

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <BookOpen className="w-16 h-16 text-indigo-600" />
                        </div>
                        <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
                            Browse All Books
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Explore <b>{genre?.count || 0}</b> books from <b>{genre?.genre || 'unknown'}</b> genre
                        </p>
                    </div>
                <BooksSection
                    books={books}
                    pagination={pagination}
                    currentPage={currentPage}
                />
            </div>
        </section>
        
    )
}

export default GenrePage