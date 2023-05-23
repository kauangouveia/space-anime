import { Carousel } from "../Carousel";
import { Title } from "../Title";
import { useListAnimeByGenre } from "@/hooks/useListAnimeByGenre";


type ListAdventureProps = {
    genre: string,
    title: string,
}
export function List({ genre, title }: ListAdventureProps) {
    const { listGenre } = useListAnimeByGenre(genre)

    return (
        <div className=" App w-[1300px] h-[580px]">
            <Title title={title} />
            <Carousel data={listGenre} idElement={genre} />
        </div>

    )
}