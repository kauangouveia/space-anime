import { CardModel } from "@/@types/cards"
import { api } from "@/services/api"
import { useEffect, useState } from "react"

export const useListAllAnimeByPopularity = () => {
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
            }
        }
    }

    const [tip, setTip] = useState<CardModel>(initialValue)

    const listAnime = async () => {
        try {
            const { data: response } = await api.get(`/anime?sort=popularityRank`)
            const cards = response?.data as CardModel[]
            const today = new Date().getDay()

            setTip(cards[today])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listAnime()
    }, [])
    return { tip }
}