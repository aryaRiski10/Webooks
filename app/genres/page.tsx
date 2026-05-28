'use client'
import HeroSection from './components/HeroSection'
import { useGenreStore } from '@/store/useGenreStore'
import { useEffect, useState } from 'react'
import ResultsSection from './components/ResultsSection'
const GenresPage = () => {
  const genres = useGenreStore((state) => state.genres)
  const fetchGenres = useGenreStore((state) => state.fetchGenres)
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
      <ResultsSection genres={genres} resultSearch={searchTerm} />
    </div>
  )
}

export default GenresPage