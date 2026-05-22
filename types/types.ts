export type CardBooksProps = {
    _id: string;
    title: string;
    cover_image: string;

    author: {
        name: string;
        url: string;
    };

    category: {
        name: string;
        url: string;
    };

    summary: string;

    details: {
        no_gm: string;
        isbn: string;
        price: string;
        total_pages: string;
        size: string;
        published_date: string;
        format: string;
    };

    tags: {
        name: string;
        url: string;
    }[];

    buy_links: {
        store: string;
        url: string;
    }[];

    publisher: string;
};

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export type SearchParamsProps = {
    keyword?: string;
    page?: number;
    genre?: string | string[];
    year?: string | string[];
    sort?: string;
}