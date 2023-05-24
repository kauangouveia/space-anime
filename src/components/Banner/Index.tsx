import Image from "next/image";
import { Button } from "../Button";
import { useListAnimeByGenre } from "@/hooks/useListAnimeByGenre";
import { useGlobalContext } from "@/context/anime-context";
import Link from "next/link";

export function Banner() {
    const { listGenre } = useListAnimeByGenre('action')
    const { setChosenAnime } = useGlobalContext();
    return (
        <div className="h-[580px] w-full flex justify-center items-center">
            <div className="w-[1300px] h-[580px] flex flex-col items-center justify-between  absolute p-10">
                <h1 className="text-6xl font-bold text-gray-950">{listGenre[0]?.attributes.canonicalTitle.toUpperCase()}</h1>
                <div className=" flex gap-3">
                    <Link href='/details'>
                        <Button text="See more" handle={() => setChosenAnime(listGenre[0])} />
                    </Link>
                </div>
            </div>
            <Image src={listGenre[0]?.attributes.coverImage.original} alt="image" className='w-full h-full object-cover' width={920} height={200} />
        </div>
    )
}