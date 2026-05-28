'use client'
import CardBookSimple from "@/components/books/CardBookSimple";
import SortBy from "./SortBy";
import BrowsePagination from "../../../components/Pagination";
import { useBookStore, type Book } from "@/store/useBookStore";
import { useBrowseStore } from "@/store/useBrowseStore";
import type { PaginationProps } from "@/types/types";
import { useEffect} from "react";
import NotFound from "./NotFound";

type Props = {
    keyword: string;
}
const SearchResult = ({ keyword }: Props) => {
    const { searchBooks, searchPagination, fetchBySearch, isSearchLoading, setSearchBooks, setSearchPagination } = useBookStore();
    const { selectedGenres, selectedYears, currentPage } = useBrowseStore();

    useEffect(() => {
        fetchBySearch({
            keyword,
            page: currentPage,
            genre: selectedGenres,
            year: selectedYears,
        });

    }, [keyword, currentPage, selectedGenres, selectedYears]);

    // if (isSearchLoading) {
    //     return <div className='text-center h-screen flex items-center justify-center'>Loading...</div>
    // }
    const filteringBooks = searchBooks.filter((book: Book) => {

        const bookGenre = book.category.name || "";
        const bookYear = book.details.published_date?.split(" ").pop() || "";

        const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(bookGenre);
        const yearMatch = selectedYears.length === 0 || selectedYears.includes(bookYear);

        return genreMatch && yearMatch;
    })

    return (
        <div className="flex flex-col gap-6 max-sm:w-full md:w-3/4">
            <div className="flex justify-between gap-4 items-center">
                <div className="flex flex-col">
                    <h2 className="text-sm md:text-md lg:text-xl italic text-gray-900">
                        Search Results for 
                        <span className="not-italic"> "{keyword}"</span>
                    </h2>
                    <span className="text-sm md:text-md text-gray-500">Menampilkan {filteringBooks.length} dari {searchPagination.totalItems} hasil</span>
                </div>
                <div className="sort flex items-center">
                    <label htmlFor="sort" className="text-sm md:text-md text-gray-500 mr-2 max-md:hidden">Sort by:</label>
                    <SortBy />
                </div>
            </div>
            {isSearchLoading ? (
                <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-xl border bg-white overflow-hidden animate-pulse"
                    >
                        <div className="h-40 bg-gray-200" />

                        <div className="p-4 space-y-3">
                        <div className="h-4 w-24 bg-gray-200 rounded-full" />
                        <div className="h-5 w-full bg-gray-200 rounded" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded" />
                        <div className="h-10 w-full bg-gray-200 rounded-md mt-6" />
                        </div>
                    </div>
                    ))}
                </div>
                ) : (
                filteringBooks.length === 0 ? (
                    <NotFound />
                ) : (
                    <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteringBooks.map((book: Book) => (
                        <CardBookSimple key={book._id} book={book} />
                        ))}
                    </div>
                )
            )}
            <div className="flex justify-center mt-6">
                <BrowsePagination />
            </div>
        </div>
    )
}

export default SearchResult