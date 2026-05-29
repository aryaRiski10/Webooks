import { getGenres, getBooksBySearch } from "@/lib/data";
import Filter from "./components/Filter";
import SearchResult from "./components/SearchResult";
import NotFound from "./components/NotFound";
import SearchInput from "../components/SearchInput";
import type { CardBooksProps, PaginationProps } from "@/types/types";

type Props = {
    searchParams: Promise<{
        keyword?: string;
        page?: string;
        genre?: string | string[];
        year?: string | string[]; 
        sort?: string; 
    }>;
}

const toSingleValue = (value?: string | string[]) => {
    if (Array.isArray(value)) return value[0] ?? "";
    return value ?? "";
};

const BrowsePage = async ({searchParams}: Props) => {
    const params = await searchParams;
    const keyword = toSingleValue(params.keyword).trim();
    const selectedGenre = toSingleValue(params.genre);
    const selectedYear = toSingleValue(params.year);
    const selectedSort = toSingleValue(params.sort);
    const pageParam = Number.parseInt(toSingleValue(params.page), 10);
    const currentPage = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

    let books: CardBooksProps[] = [];
    let pagination: PaginationProps = {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 20,
        hasNextPage: false,
        hasPrevPage: false,
    };

    if (keyword) {
        const searchResult = await getBooksBySearch({
            keyword,
            page: currentPage,
            genre: selectedGenre,
            year: selectedYear,
            sort: selectedSort,
        });

        books = searchResult.books as CardBooksProps[];
        pagination = searchResult.pagination as PaginationProps;
    }

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
    
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-10">
            {keyword ? (
                <>
                    <Filter genres={genres} />
                    <SearchResult
                        keyword={keyword}
                        books={books}
                        pagination={pagination}
                        currentPage={currentPage}
                    />
                </>
            ) : (
                <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto">
                    <div className="relative">
                        <div className="text-center mb-8">
                            <SearchInput />
                        </div>
                    </div>
                    <NotFound />
                </div>
            )}
            
        </div>
    )
}

export default BrowsePage