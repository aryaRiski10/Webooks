import { create }  from 'zustand';
import { getAllBook, getBooksByNewest, getBooksBySearch, getBooksByYear } from '@/lib/data';
import { PaginationProps, SearchParamsProps } from '@/types/types';

export type Book = {
    _id: string;
    title: string;
    cover_image: string;

    author: {
        name: string;
        url: string;
    };

    category: {
        name: string;
        url: string;
    };

    summary: string;

    details: {
        no_gm: string;
        isbn: string;
        price: string;
        total_pages: string;
        size: string;
        published_date: string;
        format: string;
    };

    tags: {
        name: string;
        url: string;
    }[];

    buy_links: {
        store: string;
        url: string;
    }[];

    publisher: string;
};

type PageProps = {
    currentPage: number;
    totalPages: number;
    totalItems?: number;
}
interface BookStore {
    books: Book[];
    newestBooks: Book[];
    yearBooks: Book[];
    searchBooks: Book[];
    searchPagination: PageProps;
    searchYear: number;
    fetchBooks: () => Promise<void>;
    fetchByNewest: () => Promise<void>;
    fetchByYear: (year: number) => Promise<void>;
    fetchBySearch: (params: SearchParamsProps) => Promise<void>;
    setSearchBooks: (books: Book[]) => void;
    setSearchPagination: (pagination: PageProps) => void;
    isLoading: boolean;
    isNewestLoading: boolean;
    isYearLoading: boolean;
    isSearchLoading: boolean;
}
export const useBookStore = create<BookStore>((set) => ({
    books: [],
    newestBooks: [],
    yearBooks: [],
    searchBooks: [],
    searchPagination: { currentPage: 1, totalPages: 1 },
    searchYear: new Date().getFullYear(),
    isLoading: false,
    isNewestLoading: false,
    isYearLoading: false,
    isSearchLoading: false,
    fetchBooks: async () => {
        set({ isLoading: true });
        try {
            const books = await getAllBook();
            set({ books });
        } finally {
            set({ isLoading: false });
        }
    },
    fetchByNewest: async () => {
        set({ isNewestLoading: true });
        try {
            const newestBooks = await getBooksByNewest();
            set({ newestBooks });
        } finally {
            set({ isNewestLoading: false });
        }
    },
    fetchByYear: async (year: number) => {
        set({ isYearLoading: true });
        try{
            const yearBooks = await getBooksByYear(year);
            set({ yearBooks });
        } finally {
            set({ isYearLoading: false });
        }
    },
    fetchBySearch: async (params: SearchParamsProps) => {
        console.log(params);
        set({ isSearchLoading: true });
        try{
            const { books, pagination } = await getBooksBySearch(params);
            console.log(books, pagination);
            set({ searchBooks: books, searchPagination: pagination });
        } catch (error) {
            console.error(error);
            set({ searchBooks: [], searchPagination: { currentPage: 1, totalPages: 1 } });
        } finally {
            set({ isSearchLoading: false });
        }

       
    },
    setSearchBooks: (books: Book[]) => set({ searchBooks: books }),
    setSearchPagination: (pagination: PageProps) => set({ searchPagination: pagination }),
}))