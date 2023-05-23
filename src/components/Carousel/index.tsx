
import { CardModel } from '@/@types/cards'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "../Card";
import { scroll } from '@/utils';
import { useState } from 'react';

type CarouselProps = {
    data: CardModel[];
    idElement: string;
}
type IdProps = {
    id: string
}

export function Carousel({ data, idElement }: CarouselProps) {

    const [list, setList] = useState<CardModel[]>([])


    const saveItemInList = (item: CardModel) => {
        const newItems = [...list, item];

        setList(newItems)

        localStorage.setItem('list', JSON.stringify(list))

    }

    const checkList = (item: CardModel) => {
        const itemExist = list.find(itemList => itemList.id === item.id)

        if (itemExist) return
        saveItemInList(item)
    }
    return (
        <div className="relative">
            <div className="absolute right-0  mt[-2rem]">
                <button onClick={() => scroll(idElement, "LEFT")} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronLeft />
                </button>
                <button onClick={() => { scroll(idElement, "RIGHT"), console.log(list) }} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronRight />
                </button>
            </div>
            <div id={idElement} className="carousel p-6 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">
                {data.map((item) => (
                    <div key={item.id}>
                        <Card item={item} setNewItem={() => checkList(item)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;