
import { CardModel } from "@/@types/cards";
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

const initialValue = {
    id: '',
    type: '',
    attributes: {
        slug: '',
        canonicalTitle: '',
        description: '',
        posterImage: {
            tiny: '',
            large: '',
            small: '',
            medium: '',
            original: '',
        },
        coverImage: {
            tiny: '',
            large: '',
            small: '',
            original: '',
        },
        youtubeVideoId: ""
    },

}

interface AnimeProps {
    children: ReactNode
}


interface ContextProps {
    chosenAnime: CardModel,
    setChosenAnime: Function
}

const GlobalContext = createContext({} as ContextProps)

export const GlobalContextProvider = ({ children }: AnimeProps) => {

    const [chosenAnime, setChosenAnime] = useState<CardModel>(initialValue)

    return (
        <GlobalContext.Provider value={{ chosenAnime, setChosenAnime }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);