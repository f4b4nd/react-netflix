interface Props {
    type: 'movie' | 'tv',
    [x: string]: string,
}


type TimgSize = "original" | "w500"

const API_KEY: string = process.env.REACT_APP_MOVIEDB_API_KEY || ""


const BASE_IMG_URL = "https://image.tmdb.org/t/p"
const BASE_URL_V3 =  "https://api.themoviedb.org/3"
const LANGUAGE_URL = "?&language=en-US"

const getAuthURL = (endpoint: string) => {
    const baseURL = BASE_URL_V3
    return `${baseURL}/${endpoint}&api_key=${API_KEY}`
}

export function getImgURL (filename: string, size: TimgSize = 'w500') {
    return `${BASE_IMG_URL}/${size}/${filename}`
}

const ENDPOINTS = {

    itemsByGenre: ({type, genreID}: Props) => `discover/${type}${LANGUAGE_URL}&with_genres=${genreID}`,

    itemsByQuery: ({type, query}: Props) => `search/${type}${LANGUAGE_URL}&query=${query}`,

    topRatedItems: ({type}: Props) => `${type}/top_rated${LANGUAGE_URL}`,
    
    trendingItems: `trending/all/week${LANGUAGE_URL}`,

    itemDetail: ({type, itemID}: Props) => `${type}/${itemID}?`

}

export const API_ROUTES = {

    getMovieByID: (itemID: string) => getAuthURL(ENDPOINTS.itemDetail({type: 'movie', itemID})),
    
    getTVShowByID: (itemID: string) => getAuthURL(ENDPOINTS.itemDetail({type: 'tv', itemID})),

    getMovies: {
        animation : getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '16'})),
        comedy: getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '35'})),
        documentary : getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '99'})),
        drama : getAuthURL(ENDPOINTS.itemsByGenre({type: 'movie', genreID: '18'})),
    },

    getTVShows: {
        animation : getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '16'})),
        comedy: getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '35'})),
        documentary : getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '99'})),
        drama : getAuthURL(ENDPOINTS.itemsByGenre({type: 'tv', genreID: '18'})),
    },

    search: {
        movies: (query: string) => getAuthURL(ENDPOINTS.itemsByQuery({type: 'movie', query})),
        tvShows: (query: string) => getAuthURL(ENDPOINTS.itemsByQuery({type: 'tv', query})),
    },

    getTopRatedMovies: getAuthURL(ENDPOINTS.topRatedItems({type: 'movie'})),

    getTopRatedTVShows: getAuthURL(ENDPOINTS.topRatedItems({type: 'tv'})),

    getTrending: getAuthURL(ENDPOINTS.trendingItems),

}

