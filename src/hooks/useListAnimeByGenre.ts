import { CardModel } from "@/@types/cards"
import { api } from "@/services/api"
import { useEffect, useState } from "react"

export const useListAnimeByGenre = (genre: string) => {
    const [listGenre, setListGenre] = useState<CardModel[]>([])
    const [status, setStatus] = useState(false)
   
    const listAnimeByGenre = async () => {
        try {
            setStatus(true)
            const { data: response } = await api.get(`/anime?filter[categories]=${genre}&sort=popularityRank&page[limit]=1`)
            const cards = response?.data as CardModel[]
            setListGenre(cards)
        } catch (error) {
            const cards = [] as CardModel[]
            setListGenre(cards)
            console.log(error)
        } finally {
            setStatus(false)
        }
    }

    useEffect(() => {
        listAnimeByGenre()
    }, [])
    
    useEffect(() => {
        console.log(listGenre,'listGenre')
    }, [listGenre])
    return { listGenre, status }
}