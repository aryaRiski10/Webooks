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
                <CarouselCard books={featuredBooks} />
            </div>     
        </section>
        </>
    )
}

export default FeaturedSection