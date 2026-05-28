import CardBookSimple from "@/components/books/CardBookSimple";
import { getBooksBySearch, getGenres } from "@/lib/data";
import { slugify } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import type { CardBooksProps } from "@/types/types";
import BooksSection from "./components/BooksSection";
import { useGenreStore } from "@/store/useGenreStore";

type Props = {
    params: Promise<{slug: string}>;
}

type GenreItem = {
    genre: string;
    count: number;
}

type GenreAccumulator = Record<string, GenreItem>;

const GenrePage = async ({ params }: Props) => {
    const { slug } = await params;
    const dataGenres = await getGenres();
    const genres = dataGenres.genres;

    const cleanGenres = (genre : string) => {
        return genre.trim().replace(/,$/, '').trim()
    }

    const uniqueGenres: GenreItem[] = Object.values(
        genres.reduce((acc: GenreAccumulator, item: GenreItem) => {
            if (!item.genre?.trim()) return acc;
            const genreName = cleanGenres(item.genre);

            if (!genreName) return acc;

            if (acc[genreName]) {
                acc[genreName].count += item.count;
            } else {
                acc[genreName] = {
                    genre: genreName,
                    count: item.count
                };
            }
            return acc;
        }, {} as GenreAccumulator)
    )

    const genre = uniqueGenres.find((item) => slugify(item.genre) === slug)

    // const dataBooks = await getBooksBySearch({ genre: genre?.genre })
    // const books = dataBooks.books;

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <BookOpen className="w-16 h-16 text-indigo-600" />
                        </div>
                        <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
                            Browse All Books
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Explore <b>{genre?.count || 0}</b> books from <b>{genre?.genre || 'unknown'}</b> genre
                        </p>
                    </div>
                <BooksSection genre={genre?.genre} />
            </div>
        </section>
        
    )
}

export default GenrePage