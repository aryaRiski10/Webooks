'use client'

import { BookOpen } from 'lucide-react'
import SearchInput from './SearchInput'
import { useGenreStore } from '@/store/useGenreStore'

interface HeroSectionProps {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onValue: string;
}

const HeroSection = ({ onSearch, onValue }: HeroSectionProps) => {
    // const totalGenres = useGenreStore((state) => state.totalGenres)
    
    return (
        <section className="relative py-20 px-4 bg-[#f0f7ff]">
            <div className="w-full max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <BookOpen className="w-16 h-16 text-indigo-600" />
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
                        Browse All Categories
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Explore 99 diverse genres and find your perfect read
                    </p>

                    <SearchInput onChange={onSearch} value={onValue} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection