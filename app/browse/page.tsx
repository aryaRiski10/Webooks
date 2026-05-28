import { getGenres, getBooksBySearch } from "@/lib/data";
import type { Book } from "@/store/useBookStore";
import Filter from "./components/Filter";
import SearchResult from "./components/SearchResult";
import NotFound from "./components/NotFound";

type Props = {
    searchParams: {
        keyword?: string;
        page?: number;
        genre?: string | string[];
        year?: string | string[]; 
        sort?: string; 
    }
}

const BrowsePage = async ({searchParams}: Props) => {
    const { keyword, page, genre, year, sort } = await searchParams;

    const { books, pagination } = await getBooksBySearch({ 
        keyword: keyword || "", 
        page: page || 1, 
        genre: genre || "", 
        year: year || "", 
        sort: sort || "" 
    });

    const dataGenres = await getGenres();
    const getAllGenres = dataGenres.genres;

    const genres = Array.from<string>(
        new Set(
            getAllGenres
                .map((item: { genre: string }) => 
                    item.genre?.trim().replace(/,$/, '').trim()
                )
                .filter(Boolean)
        )
    ); 

    // const years = Array.from<string>(new Set(getYears.filter((year:string) => year?.trim())));
    
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-10">
            {keyword ? (
                <>
                    <Filter genres={genres}/>
                    <SearchResult keyword={keyword || ""} />
                </>
            ) : (
                <NotFound />
            )}
            
        </div>
    )
}

export default BrowsePage