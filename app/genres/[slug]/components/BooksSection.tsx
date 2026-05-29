'use client'

import type { CardBooksProps } from "@/types/types";
import CardBookSimple from '@/components/books/CardBookSimple';
import BrowsePagination from "@/components/Pagination";
import { useBookStore } from "@/store/useBookStore";
import { useEffect } from "react";
import { useBrowseStore } from "@/store/useBrowseStore";

const BooksSection = ({genre}: {genre: string | undefined}) => {

    const { searchBooks, isSearchLoading, fetchBySearch } = useBookStore();
    const { currentPage } = useBrowseStore();

    useEffect(() => {
        fetchBySearch({ genre, page: currentPage });
     }, [genre, currentPage]);

    return (
        <>
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
        ):(
            <>

            <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchBooks.map((book: CardBooksProps) => (
                    <CardBookSimple key={book._id} book={book} />
                ))}
            </div>
            <div className="flex justify-center mt-12 pagination">
                <BrowsePagination />
            </div>
            </>
        )}
        
        </>
    )
}

export default BooksSection