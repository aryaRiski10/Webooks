'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type BrowsePaginationProps = {
    currentPage: number;
    totalPages: number;
}

export default function BrowsePagination({ currentPage, totalPages }: BrowsePaginationProps) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const buildHref = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <Pagination>
            <PaginationContent>
                {Array.from({ length: totalPages }, (_, i) => {
                    const pageNumber = i + 1;
                    const href = buildHref(pageNumber);
                    return (
                    <PaginationItem key={i}>
                        <PaginationLink
                            href={href}
                            isActive={currentPage === pageNumber}
                            onClick={(event) => {
                                event.preventDefault();
                                router.push(href);
                            }}
                        >
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                )})}
            </PaginationContent>
        </Pagination>
    )
}
