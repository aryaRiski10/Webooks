import { BookOpen } from 'lucide-react'
import SearchInput from './SearchInput'

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-[#f0f7ff]">
        <div className="w-full max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <BookOpen className="w-16 h-16 text-indigo-600" />
                </div>
                <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
                    Discover Your Next<br />Great Read
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Explore thousands of books from our extensive collection. Find your perfect story today.
                </p>

                <SearchInput />
            </div>

            <div className="flex justify-center gap-3 flex-wrap mt-6">
            {/* <Chip label="Bestsellers" color="primary" clickable />
            <Chip label="New Arrivals" clickable />
            <Chip label="Staff Picks" clickable />
            <Chip label="Award Winners" clickable /> */}
            </div>
        </div>
    </section>
  )
}

export default HeroSection