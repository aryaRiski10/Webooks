import type { SearchParamsProps } from "@/types/types";

export async function getStatsData(){
    const res = await fetch('https://api.bukuacak.shabsolute.tech/api/v1/book')
    const data = await res.json()
    const stats = data.pagination
    return stats
}
export async function getAllBook(){
    const res = await fetch('https://api.bukuacak.shabsolute.tech/api/v1/book/')
    const data = await res.json()
    const books = data.books
    return books
}

export async function getBookById(_id: string){
    const res = await fetch(`https://api.bukuacak.shabsolute.tech/api/v1/book/${_id}`)
    const data = await res.json()
    return data
}

export async function getGenres(){
    const res = await fetch(`https://api.bukuacak.shabsolute.tech/api/v1/stats/genre`)
    const data = await res.json()
    const genres = data.genre_statistics
    return genres
}

export async function getBooksByNewest(){
    const res = await fetch(`https://api.bukuacak.shabsolute.tech/api/v1/book?sort=newest`)
    const data = await res.json()
    const books = data.books
    return books
}

export async function getBooksByYear(year: number){
    const res = await fetch(`https://api.bukuacak.shabsolute.tech/api/v1/book?year=${year}`)
    const data = await res.json()
    const books = data.books
    return books
}

export async function getBooksBySearch({ keyword, page, genre, year, sort }: SearchParamsProps) {
    const params = new URLSearchParams();
    if (keyword) params.set('keyword', keyword);
    if (page) params.set('page', page.toString());
    if (genre) params.set('genre', genre.toString());
    if (year) params.set('year', year.toString());
    if (sort) params.set('sort', sort);

    const url = `https://api.bukuacak.shabsolute.tech/api/v1/book?${params.toString()}`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(url)
    return { books: data.books, pagination: data.pagination }
}