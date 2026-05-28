import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Genre } from "@/store/useGenreStore"
import { Link } from "lucide-react"

interface CardGenreProps {
  genre: Genre
}

export function CardGenre({ genre }: CardGenreProps) {
  return (
      <Card size="sm" className="mx-auto w-full max-w-sm justify-center cursor-pointer hover:bg-gray-100 transition-colors">
        <CardHeader className="justify-items-center space-y-1">
          <CardTitle className="lg:!text-lg text-center">{genre.genre}</CardTitle>
          <CardDescription>
            {genre.count} books available
          </CardDescription>
        </CardHeader>      
      </Card>
    )

    }

export default CardGenre