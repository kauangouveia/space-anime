
import { CardModel } from '@/@types/cards'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "../Card";
import { scroll } from '@/utils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useGlobalContext } from '@/context/anime-context';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

type CarouselProps = {
    data: CardModel[];
    idElement: string;
}

export function Carousel({ data, idElement }: CarouselProps) {
    const { setChosenAnime } = useGlobalContext();

    const [list, setList] = useState<CardModel[]>([])

    const checkList = (item: CardModel) => {
        const itemExist = list.find(itemList => itemList?.id === item?.id)

        if (itemExist) return
        const newItems = [...list, item];

        localStorage.setItem('myList', JSON.stringify(newItems))
        setList(newItems)
    }
    return (
        <div className="relative">
            <div className="absolute right-0  mt[-2rem]">
                <button onClick={() => scroll(idElement, "LEFT")} className="p-2 m-2 rounded-full bg-white">
                    <AiFillCaretLeft color='black' size={15} />
                </button>
                <button onClick={() => scroll(idElement, "RIGHT")} className="p-2 m-2 rounded-full bg-white">
                    <AiFillCaretRight color='black' size={15} />
                </button>
            </div>
            <div id={idElement} className="carousel p-6 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">
                {Array.isArray(data) && data?.map((item) => (
                    <div key={item.id}>
                        <Card item={item} setNewItem={() => checkList(item)} setChosenAnime={() => setChosenAnime(item)} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;