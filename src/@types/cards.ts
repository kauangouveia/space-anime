export type CardModel = {
    id: string;
    type: string
    attributes: {
        slug: string;
        canonicalTitle: string;
        description: string;
        posterImage: {
            tiny: string;
            large: string;
            small: string;
            medium: string;
            original: string;
        };
        coverImage: {
            tiny: string;
            large: string;
            small: string;
            original: string;
        };
        youtubeVideoId: string
    }
}
