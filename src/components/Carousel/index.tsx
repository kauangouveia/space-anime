
import { CardModel } from '@/@types/cards'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Card from "../Card";
import { scroll } from '@/utils';

type CarouselProps = {
    data: CardModel[];
    idElement: string;
}

export function Carousel({ data, idElement }: CarouselProps) {
    return (
        <div className="relative">
            <div className="absolute right-0  mt[-2rem]">
                <button onClick={() => scroll(idElement, "LEFT")} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronLeft />
                </button>
                <button onClick={() => scroll(idElement, "RIGHT")} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronRight />
                </button>
            </div>
            <div id={idElement} className="carousel p-6 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide">
                {data.map((item) => (
                    <div key={item.id}>
                        <Card cardImage={item.attributes.posterImage.medium} title={item.attributes.slug} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;