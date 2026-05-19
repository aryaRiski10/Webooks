
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