'use client'

import type { CardBooksProps } from "@/types/types";
import CardBookSimple from '@/components/books/CardBookSimple';
import BrowsePagination from "@/components/Pagination";
import { useBookStore } from "@/store/useBookStore";
import { useEffect } from "react";
import { useBrowseStore } from "@/store/useBrowseStore";

const BooksSection = ({genre}: {genre: string | undefined}) => {

    const { searchBooks, fetchBySearch } = useBookStore();
    const { currentPage } = useBrowseStore();

    useEffect(() => {
        fetchBySearch({ genre, page: currentPage });
     }, [genre, currentPage]);

    return (
        <>
        <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchBooks.map((book: CardBooksProps) => (
                <CardBookSimple key={book._id} book={book} />
            ))}
        </div>
        <div className="flex justify-center mt-6 pagination">
            <BrowsePagination />
        </div>
        </>
    )
}

export default BooksSection