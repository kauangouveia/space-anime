import { CardModel } from "@/@types/cards";
import { Carousel } from "../Carousel";
import { Title } from "../Title";
import { useListAnimeByGenre } from "@/hooks/useListAnimeByGenre";
import { useState, useEffect } from "react";


export function MyList() {
    const [myList, setMyList] = useState<CardModel[]>([])

    useEffect(() => {
        const myList = localStorage.getItem('myList')
        const myListJson = JSON.parse(myList || "{}")
        setMyList(myListJson)
    }, [])

    return (
        <div className=" App w-[1300px] h-[580px]">
            <Title title='MY LIST ANIMES' />
            <Carousel data={myList} idElement='MY LIST ANIMES' />
        </div>

    )
}