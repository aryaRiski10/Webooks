'use client'
import { BookSearch } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import {useState} from "react"

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function SearchInput({onChange, value}: SearchInputProps) {
  return (
    <form action="/browse">
      <InputGroup className="max-w-full mx-auto px-4 py-7 bg-white rounded-lg shadow-sm">
        <InputGroupInput placeholder="Search categories..." type="text" name="keyword" value={value} onChange={(e) => onChange(e)} className="placeholder:text-lg placeholder:text-gray-300" />
        <InputGroupAddon>
          <BookSearch className="!w-6 !h-6 text-gray-300" />  
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}
