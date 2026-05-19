import * as React from "react"
import type { Book } from "@/store/useBookStore"
import CardBook from "@/components/books/CardBook"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselCard({books}: {books: Book[]}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="flex h-full mt-auto px-6">
        {books.map((book) => (
          <CarouselItem key={book._id} className="carousel-item max-[450px]:basis-1/1 basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <CardBook book={book} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="xl:-left-10 left-0 w-[50px] h-[50px] hover:bg-gray-100 hover:text-indigo-900 border-0 shadow-sm"/>
      <CarouselNext className="xl:-right-10 right-0 w-[50px] h-[50px] hover:bg-gray-100 hover:text-indigo-900 border-0 shadow-sm"/>
    </Carousel>
  )
}
