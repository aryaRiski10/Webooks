import { Button } from '@/components/ui/button'
import { useBookStore } from '@/store/useBookStore'
import { CarouselCard } from '@/components/books/CarouselCard'
import { useEffect } from 'react'

const PopularSection = () => {
    const yearBooks = useBookStore((state) => state.yearBooks)
    const fetchByYear = useBookStore((state) => state.fetchByYear)
    const isYearLoading = useBookStore((state) => state.isYearLoading)
    
    useEffect(() => {
        if (yearBooks.length === 0 && !isYearLoading) {
            fetchByYear(2025)
        }
    }, [fetchByYear, yearBooks.length, isYearLoading])
    
    const featuredBooks = yearBooks.slice(0,9)
    return (
        <> 
        <section className="py-16 px-4 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Books Last Year</h2>
                    <Button>View All</Button>
                </div>
                <CarouselCard books={featuredBooks} />
            </div>     
        </section>
        </>
    )
}

export default PopularSection