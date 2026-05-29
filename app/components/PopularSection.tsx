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
            fetchByYear(2024)
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
                {isYearLoading ? (
                    <div className="grid min-[360px]:grid-cols-2 min-[500px]:grid-cols-3 lg:grid-cols-4 gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-xl border bg-white overflow-hidden animate-pulse"
                            >
                                <div className="h-40 bg-gray-200" />
                                <div className="p-4 space-y-3">
                                    <div className="flex justify-between items-center gap-6">
                                        <div className="h-5 w-full bg-gray-200 rounded" />
                                        <div className="h-4 w-24 bg-gray-200 rounded-full" />
                                    </div>
                                    <div className="h-8 w-full bg-gray-200 rounded" />
                                    <div className="h-6 w-full bg-gray-200 rounded mt-6" />
                                </div>
                            </div>
                            ))}
                        </div>
                ):(
                    <CarouselCard books={featuredBooks} />
                )}
            </div>     
        </section>
        </>
    )
}

export default PopularSection