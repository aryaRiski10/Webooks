import { BookSearch } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"

export default function SearchInput() {
  return (
    <InputGroup className="max-w-full mx-auto px-4 py-7 bg-white rounded-lg shadow-sm">
      <InputGroupInput placeholder="Search for books, genres, or authors..." className="placeholder:text-lg placeholder:text-gray-300" />
      <InputGroupAddon>
        <BookSearch className="!w-6 !h-6 text-gray-300" />  
      </InputGroupAddon>
      <Button className="bg-indigo-500 hover:bg-indigo-600 uppercase p-5">Search</Button>
    </InputGroup>
  )
}
