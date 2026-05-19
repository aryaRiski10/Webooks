import { create }  from 'zustand';
import { getAllBook, getBooksByNewest, getBooksByYear } from '@/lib/data';

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

interface BookStore {
    books: Book[];
    newestBooks: Book[];
    yearBooks: Book[];
    fetchBooks: () => Promise<void>;
    fetchByNewest: () => Promise<void>;
    fetchByYear: (year: number) => Promise<void>;
    isLoading: boolean;
    isNewestLoading: boolean;
    isYearLoading: boolean;
}
export const useBookStore = create<BookStore>((set) => ({
    books: [],
    newestBooks: [],
    yearBooks: [],
    isLoading: false,
    isNewestLoading: false,
    isYearLoading: false,
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
    }
}))