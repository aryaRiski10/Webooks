import { create } from "zustand"
import { getGenres } from "@/lib/data"

export type Genre = {
    count: number;
    genre: string;
}

interface GenreStore {
    genres: Genre[];
    totalGenres: number;
    fetchGenres: () => Promise<void>;
    isLoading: boolean;
}

export const useGenreStore = create<GenreStore>((set) => ({
    genres: [],
    totalGenres: 0,
    isLoading: false,
    fetchGenres: async () => {
        set({ isLoading: true });
        try {
            const { genres, totalGenres } = await getGenres();
            set({ genres, totalGenres });
        } catch (error) {
            console.error("Failed to fetch genres:", error);
            // throw new Error("Failed to fetch genres");
        } finally {
            set({ isLoading: false });
        }
    }
}))