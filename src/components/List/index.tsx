import { Carousel } from "../Carousel";
import { Loading } from "../Loading";
import { Title } from "../Title";
import { useListAnimeByGenre } from "@/hooks/useListAnimeByGenre";


type ListAdventureProps = {
    genre: string,
    title: string,
}
export function List({ genre, title }: ListAdventureProps) {
    const { listGenre, status } = useListAnimeByGenre(genre)

    return (
        <div className=" App w-[1300px] h-[580px]">
            {status && <Loading />}
            {!status
                &&
                <>
                    <Title title={title} />
                    <Carousel data={listGenre} idElement={genre} />
                </>
            }
        </div>

    )
}