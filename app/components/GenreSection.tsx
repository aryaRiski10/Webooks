import { useGenreStore } from '@/store/useGenreStore';
import Link from 'next/link';
import { useEffect } from 'react'

const GenreSection = () => {
    const genres = useGenreStore((state) => state.genres);
    const fetchGenres = useGenreStore((state) => state.fetchGenres);
    const isLoading = useGenreStore((state) => state.isLoading);

    useEffect(() => {
        fetchGenres();
    }, [fetchGenres]);

    const listGenres = genres.slice(0, 8).map((genre) => {
        return (
            <Link key={genre.genre} href="/genres" >
                <div className="flex gap-2 items-center rounded-lg shadow-md p-4 bg-indigo-50 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 hover:text-white text-indigo-900">
                    <span className="text-lg font-semibold">{genre.genre}</span>
                    <span className="text-sm">({genre.count} books)</span>
                </div>
            </Link>
        )

    })
    
    return (
        <section className="relative py-20 px-4 bg-linear-to-bl from-[#f0f7ff] to-transparent">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Browse by Genre
                    </h2>
                </div>
            </div>
            {isLoading ? (
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-50 flex gap-2 items-center bg-indigo-50 rounded-lg shadow-md p-4 transition delay-50 duration-300 ease-in-out animate-pulse"
                        >
                            <div className="h-6 w-full bg-gray-200 rounded-full" />
                        </div>
                    ))}
                </div>
            ):(
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
                    {listGenres}
                    <Link href="/genres">
                        <div className="flex gap-2 items-center bg-indigo-50 rounded-lg shadow-md p-4 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white text-indigo-900">
                            <span className="text-lg font-semibold">All Genre</span>
                        </div>
                    </Link>
                </div>
            )}
            
        </section>
    )
}

export default GenreSection