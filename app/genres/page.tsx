'use client'
import HeroSection from './components/HeroSection'
import { useGenreStore } from '@/store/useGenreStore'
import { useEffect, useState } from 'react'
import ResultsSection from './components/ResultsSection'
const GenresPage = () => {
  // const genres = useGenreStore((state) => state.genres)
  // const fetchGenres = useGenreStore((state) => state.fetchGenres)
  const { genres, isLoading, fetchGenres } = useGenreStore()
  const [ searchTerm, setSearchTerm ] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }

  useEffect(() => {
    fetchGenres()
  }, [fetchGenres])

  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
      <HeroSection onSearch={handleSearch} onValue={searchTerm} />
      {isLoading ? (
        <section className="py-16 px-4 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="w-full">
                        <div className="flex flex-col items-center p-4 space-y-3 animate-pulse">
                          <div className="h-5 w-full bg-gray-200 rounded" />
                          <div className="h-4 w-2/3 bg-gray-200 rounded" />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
      ):(
        <ResultsSection genres={genres} resultSearch={searchTerm} />
      )}
    </div>
  )
}

export default GenresPage