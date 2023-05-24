export const scroll = (idElement: string, ordination: string) => {
    const element = window.document.getElementById(idElement);
    if (element !== null && ordination === 'RIGHT') {
        element.scrollLeft -= 400;
    }
    if (element !== null && ordination === 'LEFT') {
        element.scrollLeft += 400;
    }
}
export const initialValue = {
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