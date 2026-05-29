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

export default function CardBook({ book }: { book: CardBooksProps }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 flex h-110">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <BookImage
        src={book.cover_image}
        title={book.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        width={400}
        height={225}
        fallbackSrc={`https://placehold.co/600x400/png?text=${encodeURIComponent(book.title)}`}
      />
      <CardContent className="p-0 flex flex-col h-full justify-between">
        <CardHeader className="flex flex-col gap-4">
          <CardAction className="w-full md:flex-row flex-col max-md:flex-col-reverse col-start-1 flex items-start justify-between gap-2">
            <CardTitle>{book.title}</CardTitle>
            <Badge className="mt-1" variant="secondary">{book.category.name}</Badge>
          </CardAction>
          <CardDescription>
            {book.summary.slice(0, 100)}...
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/books/${book._id}/${slugify(book.title)}`} className="w-full">
            <Button className="w-full cursor-pointer">View Detail</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>

  )
}
