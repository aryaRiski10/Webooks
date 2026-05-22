import { BookSearch } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import {useState} from "react"

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <form action="/browse">
      <InputGroup className="max-w-full mx-auto px-4 py-7 bg-white rounded-lg shadow-sm">
        <InputGroupInput placeholder="Search for books, genres, or authors..." type="text" name="keyword" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="placeholder:text-lg placeholder:text-gray-300" />
        <InputGroupAddon>
          <BookSearch className="!w-6 !h-6 text-gray-300" />  
        </InputGroupAddon>
        <Button type="submit" className="bg-indigo-500 hover:bg-indigo-600 uppercase p-5">Search</Button>
      </InputGroup>
    </form>
  )
}
