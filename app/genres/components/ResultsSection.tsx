import CardGenre from "@/components/genres/CardGenre"
import { slugify } from "@/lib/utils"
import type { Genre } from "@/store/useGenreStore"
import Link from "next/link"

interface GenreProps {
  genres: Genre[]
  resultSearch: string
}
const ResultsSection = ({ genres, resultSearch }: GenreProps) => {

    const cleanGenres = (genre : string) => {
        return genre.trim().replace(/,$/, '').trim()
    }
    
    const uniqueGenres = Object.values(
        genres.reduce((acc, item) => {
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
        }, {} as Record<string, { genre: string; count: number }>)
    )

    const searchGenres = uniqueGenres.filter((item) => 
        (item.genre ?? "").toLowerCase().includes(resultSearch.toLowerCase())
    )

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
                {searchGenres.map((genre) => (
                    <Link key={genre.genre} href={`/genres/${slugify(genre.genre)}`} className="w-full">
                        <CardGenre genre={genre} />
                    </Link>
                ))}
                </div>
            </div>
        </section>
    )
}

export default ResultsSection