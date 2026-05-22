'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useMediaQuery } from "usehooks-ts"

export default function SortBy() {
  const isMobile = useMediaQuery("(max-width: 640px)", {});
  return (
    <Select>
        <SelectTrigger className="w-30 md:w-45">
            <SelectValue placeholder={isMobile ? "Sort" : "Select"} className="capitalize" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="titleAZ">Title A-Z</SelectItem>
                <SelectItem value="titleZA">Title Z-A</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
    )
}