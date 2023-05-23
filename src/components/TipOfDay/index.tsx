import Image from "next/image";
import { Title } from "../Title";
import {  useListAllAnimeByPopularity } from "@/hooks/useListAllAnimeByPopularity";


export function TipOfDay() {
    const { tip } = useListAllAnimeByPopularity()

    return (
        <div className="w-[1300px] h-[580px] flex items-center justify-center flex-col">
            <Title title="TIP OF THE DAY" />
            <div className="flex items-center justify-center w-full gap-7">
                <div className="h-[450px] rounded-2xl w-3/6 bg-red-700">
                    <Image className="h-full rounded-2xl w-full" src={tip.attributes.coverImage.original} alt='' width={520} height={200}/>
                </div>
                <div className="w-2/5 text-lg font-medium">
                    {tip.attributes.description}
                </div>
            </div>
        </div>
    )
}