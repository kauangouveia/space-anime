import { CardModel } from "@/@types/cards"
import { api } from "@/services/api"
import { useEffect, useState } from "react"

export const useListAnimeByGenre = (genre: string) => {
    const [listGenre, setListGenre] = useState<CardModel[]>([])
    
    const listAnimeByGenre = async () => {
        try {
            const { data: response } = await api.get(`/anime?filter[categories]=${genre}&sort=popularityRank`)
            const cards = response?.data as CardModel[]
            setListGenre(cards)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listAnimeByGenre()
    }, [])
    return { listGenre }
}