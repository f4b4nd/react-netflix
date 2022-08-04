interface Props {
    type: 'movie' | 'tv',
    [x: string]: string,
}

type TimgSize = "original" | "w500"

const API_KEY: string = process.env.REACT_APP_MOVIEDB_API_KEY ?? ""

const BASE_IMG_URL = "https://image.tmdb.org/t/p"
const BASE_URL_V4 =  "https://api.themoviedb.org/4"
const BASE_URL_V3 =  "https://api.themoviedb.org/3"
const LANGUAGE_URL = "?&language=en-US"

const getAuthURL = (endpoint: string, useV3: boolean = false) => {
    const baseURL = useV3 ? BASE_URL_V3 : BASE_URL_V4
    return `${baseURL}/${endpoint}&api_key=${API_KEY}`
}

export function getImgURL (filename: string, size: TimgSize = 'w500') {
    return `${BASE_IMG_URL}/${size}/${filename}`
}

const ENDPOINTS = {

    itemsByGenre: ({type, genreID}: Props) => `discover/${type}/${LANGUAGE_URL}&with_genres=${genreID}`,

    itemsByQuery: ({type, query}: Props) => `search/${type}${LANGUAGE_URL}&query=${query}`,

    topRatedItems: ({type}: Props) => `${type}/top_rated${LANGUAGE_URL}`,
    
    trendingItems: `trending/all/week${LANGUAGE_URL}`,

}

export const API_ROUTES = {

    getMovies: {
        action: getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '28'})),
        comedy: getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '35'})),
        animation : getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '16'})),
        documentary : getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '99'})),
        drama : getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '18'})),
        scifi : getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '878'})),
    },

    getTVShows: {
        action: getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '28'})),
        comedy: getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '35'})),
        animation : getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '16'})),
        documentary : getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '99'})),
        drama : getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '18'})),
        scifi : getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '878'})),
    },

    search: {
        movies: (query: string) => getAuthURL(ENDPOINTS.itemsByQuery({type: 'movie', query})),
        tvShows: (query: string) => getAuthURL(ENDPOINTS.itemsByQuery({type: 'tv', query})),
    },

    getTopRatedMovies: getAuthURL(ENDPOINTS.topRatedItems({type: 'movie'}), true),

    getTopRatedTVShows: getAuthURL(ENDPOINTS.topRatedItems({type: 'tv'}), true),

    getTrending: getAuthURL(ENDPOINTS.trendingItems, true),

}

