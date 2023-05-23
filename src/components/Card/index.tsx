import Image from 'next/image'
import { Button } from '../Button';
import { CardModel } from '@/@types/cards';
import { useListAnimeByGenre } from '@/hooks/useListAnimeByGenre';
import { useState } from 'react';

type CardProps = {
    item: CardModel
    setNewItem: Function
}
export function Card({ item, setNewItem }: CardProps) {
  
    const cardImage = item.attributes.posterImage.medium
    const title = item.attributes.slug

    return (
        <>
            <div className="card bg-zinc-900 hover:scale-110 hover:mx-4 duration-300 w-[300px] h-auto m-2 rounded-lg shadow-lg">
                <div className="top">
                    <Image src={cardImage} alt="image" className="w-[300px] h-[300px] object-cover rounded-xl p-2" width={420} height={200} />
                </div>
                <div className="bottom flex flex-col justify-center items-start p-3 bg-">
                    <div className="title font-semibold text-base my-1">
                        {title}
                    </div>
                    <div className="flex items-center mt-1 gap-4 justify-center">
                        <Button text='See more' handle={() => console.log()} />
                        <Button text='Add to my list' handle={() => setNewItem(item)} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;