import { Button } from '@/components/ui/button'
import { useBookStore } from '@/store/useBookStore'
import { CarouselCard } from '@/components/books/CarouselCard'
import { useEffect } from 'react'

const FeaturedSection = () => {
    const newestBooks = useBookStore((state) => state.newestBooks)
    const fetchByNewest = useBookStore((state) => state.fetchByNewest)
    const isNewestLoading = useBookStore((state) => state.isNewestLoading)
    
    useEffect(() => {
        if (newestBooks.length === 0 && !isNewestLoading) {
            fetchByNewest()
        }
    }, [fetchByNewest, newestBooks.length, isNewestLoading])
    
    const featuredBooks = newestBooks.slice(0,9)
    return (
        <>
            <section className="py-16 px-4 bg-gray-50">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Books</h2>
                        <Button>View All</Button>
                    </div>
                    {isNewestLoading ? (
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

export default FeaturedSection