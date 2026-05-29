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
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SortBy() {
  const isMobile = useMediaQuery("(max-width: 640px)", {});
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedSort = searchParams.get("sort") ?? "";

    const handleSortChange = (value: string | null) => {
      if (!value) {
        return;
      }
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", value);
        params.set("page", "1");
        router.push(`${pathname}?${params.toString()}`);
    };

  return (
        <Select value={selectedSort || undefined} onValueChange={handleSortChange}>
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