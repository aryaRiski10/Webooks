import { create } from "zustand"


interface BrowseStore {
    selectedGenres: string;
    selectedYears: string;
    currentPage: number;
    setSelectedGenres: (genre: string) => void;
    setSelectedYears: (year: string) => void;
    setCurrentPage: (page: number) => void;
}
export const useBrowseStore = create<BrowseStore>((set) => ({
    selectedGenres: "",
    selectedYears: "",
    currentPage: 1,
    setCurrentPage: (page) => set({ currentPage: page }),
    setSelectedGenres: (genre) => set({ selectedGenres: genre, currentPage: 1 }),
    setSelectedYears: (year) => set({ selectedYears: year, currentPage: 1 })
}))