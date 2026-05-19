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