import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useGlobalContext } from "@/context/anime-context";
import { useChooseAnime } from "@/hooks/useChooseAnime";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactPlayer from 'react-player/youtube'



export default function Details() {
    const { chosenAnime, setChosenAnime } = useGlobalContext();

    const url = `https://www.youtube.com/watch?v=${chosenAnime?.attributes?.youtubeVideoId}`

    return (
        <Container >
            <div className="w-[1300px] h-[780px] flex items-center justify-center flex-col">
                <div className="flex items-center min-h-[580px] h-auto p-10 justify-center w-full gap-7 bg-white rounded-lg">
                    <div className="h-auto rounded-2xl w-3/6  flex items-center justify-center flex-col ">
                        <ReactPlayer url={url} className="w-full h-full" playing={true} />
                        <Link href='/' className="w-full h-auto flex justify-start items-start pl-2 mt-2">
                            <Button text='Back' handle={() => { setChosenAnime({}) }} />
                        </Link>
                    </div>
                    <div className="w-2/5 text-lg font-medium flex flex-col gap-2">
                        <h1 className="w-2/5 text-3xl font-bold text-gray-950">
                            {chosenAnime?.attributes?.canonicalTitle}
                        </h1>
                        <p className="text-lg font-medium text-slate-900">
                            {chosenAnime?.attributes?.description}
                        </p>
                    </div>
                </div>
            </div>

        </Container>
    )
}