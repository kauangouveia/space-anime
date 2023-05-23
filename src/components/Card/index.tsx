import Image from 'next/image'
import { Button } from '../Button';

type CardProps = {
    cardImage: string,
    title: string
}
export function Card({ cardImage, title }: CardProps) {
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
                        <Button text='See more'  handle={() => console.log()} />
                        <Button text='Add to my list' handle={() => console.log()} />

                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;