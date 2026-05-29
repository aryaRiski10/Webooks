'use client'
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type Props = {
    genres: string[];
}
const Filter = ({ genres }: Props) => {
    const [isShowFilter, setIsShowFilter] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const LIMIT = 10;
    const visibleGenres = isShowFilter ? genres : genres.slice(0, LIMIT);

    const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];
    const selectedGenre = searchParams.get("genre") ?? "";
    const selectedYear = searchParams.get("year") ?? "";

    const updateParam = (key: "genre" | "year", value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        params.set("page", "1");
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="relative max-sm:w-full md:w-1/4">
            <div className="flex flex-col sticky top-20">
                <div className="flex w-full mb-4 border-b-2 border-gray-300 pb-2">
                    <h2 className="text-lg lg:text-2xl font-serif font-medium">Filter Book</h2>
                </div>
                <div className="filters flex flex-col gap-8">
                    <div className="flex flex-col w-full">
                        <h3 className="text-lg max-lg:text-sm text-gray-400">Genre</h3>
                        <RadioGroup value={selectedGenre} onValueChange={(value) => updateParam("genre", value)} className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-2 max-lg:text-sm text-gray-700 cursor-pointer transition-colors">
                                <RadioGroupItem value="" id="all-genres"/>
                                <label htmlFor="all-genres">All</label>
                            </div>
                            {visibleGenres.map((genre) => (
                                <div key={genre} className="flex items-center gap-2 max-lg:text-sm text-gray-700 cursor-pointer transition-colors">
                                    <RadioGroupItem value={genre} id={genre}/>
                                    <label htmlFor={genre}>{genre}</label>
                                </div>
                            ))}
                        </RadioGroup>
                        <button className="bg-gray-200 w-fit self-center text-sm hover:bg-gray-300 rounded-md text-gray-700 border-gray-400 px-6 py-1 mt-3 cursor-pointer" onClick={() => setIsShowFilter(!isShowFilter)}>
                            {isShowFilter ? "Show Less" : `+ ${genres.length - LIMIT} More`}
                        </button>
                    </div>
                    <div className="flex flex-col w-full">
                        <h3 className="text-lg max-lg:text-sm text-gray-400">Year</h3>
                        <RadioGroup value={selectedYear} onValueChange={(value) => updateParam("year", value)} className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-2 max-lg:text-sm text-gray-700 cursor-pointer transition-colors">
                                <RadioGroupItem value="" id="all-years"/>
                                <label htmlFor="all-years">All</label>
                            </div>
                            {years.map((year) => (
                                <div key={year} className="flex items-center gap-2 max-lg:text-sm text-gray-700 cursor-pointer transition-colors">
                                    <RadioGroupItem value={year} id={year}/>
                                    <label htmlFor={year}>{year}</label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Filter