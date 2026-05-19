import { create } from "zustand"
import { getGenres } from "@/lib/data"

export type Genre = {
    count: number;
    genre: string;
}

interface GenreStore {
    genres: Genre[];
    fetchGenres: () => Promise<void>;
    isLoading: boolean;
}

export const useGenreStore = create<GenreStore>((set) => ({
    genres: [],
    isLoading: false,
    fetchGenres: async () => {
        set({ isLoading: true });
        const genres = await getGenres();
        set({ genres, isLoading: false });
    }
}))