'use client'
import CardBookSimple from "@/components/books/CardBookSimple";
import SortBy from "./SortBy";
import BrowsePagination from "../../../components/Pagination";
import type { CardBooksProps, PaginationProps } from "@/types/types";
import NotFound from "./NotFound";

type Props = {
    keyword: string;
    books: CardBooksProps[];
    pagination: PaginationProps;
    currentPage: number;
}
const SearchResult = ({ keyword, books, pagination, currentPage }: Props) => {

    return (
        <div className="flex flex-col gap-6 max-sm:w-full md:w-3/4">
            <div className="flex justify-between gap-4 items-center">
                <div className="flex flex-col">
                    <h2 className="text-sm md:text-md lg:text-xl italic text-gray-900">
                        Search Results for 
                        <span className="not-italic"> "{keyword}"</span>
                    </h2>
                    <span className="text-sm md:text-md text-gray-500">Menampilkan {books.length} dari {pagination.totalItems} hasil</span>
                </div>
                <div className="sort flex items-center">
                    <label htmlFor="sort" className="text-sm md:text-md text-gray-500 mr-2 max-md:hidden">Sort by:</label>
                    <SortBy />
                </div>
            </div>
            {books.length === 0 ? (
                <NotFound />
            ) : (
                <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-4 gap-4">
                        {books.map((book) => (
                        <CardBookSimple key={book._id} book={book} />
                        ))}
                </div>
            )}
            <div className="flex justify-center mt-6">
                <BrowsePagination currentPage={currentPage} totalPages={pagination.totalPages} />
            </div>
        </div>
    )
}

export default SearchResult