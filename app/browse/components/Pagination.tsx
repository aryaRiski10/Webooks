import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import type { PaginationProps } from "@/types/types";
import { useBrowseStore } from "@/store/useBrowseStore";
import { useBookStore } from "@/store/useBookStore";

type Props = {
    pagination: PaginationProps;
    keyword?: string;
    totalPages?: number;
}

export default function BrowsePagination() {
    const { currentPage, setCurrentPage} = useBrowseStore();
    const { searchPagination } = useBookStore();
    
    // const query = keyword || "";
    // const currentPage = pagination.currentPage;
    // const totalPages = totalPages || pagination.totalPages;

    return (
        <Pagination>
            <PaginationContent>
                {Array.from({ length: searchPagination.totalPages || 0 }, (_, i) => (
                    <PaginationItem key={i}>
                        <PaginationLink isActive={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
                    </PaginationItem>
                ))}
            </PaginationContent>
        </Pagination>
    )
}
