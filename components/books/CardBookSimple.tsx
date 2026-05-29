'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { slugify } from "@/lib/utils"
import { CardBooksProps } from "@/types/types"
import Link from "next/link"
import BookImage from "./BookImage"

export default function CardBookSimple({ book }: { book: CardBooksProps }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 flex h-full gap-0 p-0">
      <div className="relative">  
        
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <BookImage
          src={book.cover_image}
          title={book.title}
          className="relative z-20 aspect-video w-full object-cover"
          width={400}
          height={225}
          fallbackSrc={`https://placehold.co/600x400/png?text=${encodeURIComponent(book.title)}`}
          loading="eager"
          />
        <span className="absolute z-50 text-xs font-bold top-2 left-2 bg-indigo-50 rounded-full px-3 py-1 text-gray-800">
            {book.details.published_date?.split(" ").pop()}
        </span>
      </div>
      <CardContent className="p-0 flex flex-col h-full justify-between">
        <CardHeader className="flex flex-col gap-4 p-4">
          <CardAction className="w-full flex-col col-start-1 flex items-start justify-between gap-2">
            <Badge className={`bg-gray-200 mt-1 text-xs ${book.category.name ? "flex" : "hidden"}`} variant="secondary">{book.category.name}</Badge>
            <CardTitle className="text-xs line-clamp-2">{book.title}</CardTitle>
            <CardDescription className="text-xs text-gray-500">by {book.author.name}</CardDescription>
          </CardAction>
        </CardHeader>
        <CardFooter className="p-4">
          <Link href={`/books/${book._id}/${slugify(book.title)}`} className="w-full">
            <Button className="w-full text-xs cursor-pointer">View Detail</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>

  )
}
