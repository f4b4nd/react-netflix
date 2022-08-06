import { useFetchAPI } from '../hooks'

import { BrowseContainer } from '../containers/browse'

import { API_ROUTES } from '../lib/themoviedb.prod'

export default function Browse () {

    const movies = useFetchAPI(API_ROUTES.getMovieByID('2'))

    const slides = {
        films: [
            { title: 'Animation', data: useFetchAPI(API_ROUTES.getMovies.animation) },
            { title: 'Comedy', data: useFetchAPI(API_ROUTES.getMovies.comedy) },
            { title: 'Documentary',  data: useFetchAPI(API_ROUTES.getMovies.documentary) },
            { title: 'Drama', data: useFetchAPI(API_ROUTES.getMovies.drama) },
        ],
        series: [
            { title: 'Animation', data: useFetchAPI(API_ROUTES.getTVShows.animation) },
            { title: 'Comedy', data: useFetchAPI(API_ROUTES.getTVShows.comedy) },
            { title: 'Documentary',  data: useFetchAPI(API_ROUTES.getTVShows.documentary) },
            { title: 'Drama', data: useFetchAPI(API_ROUTES.getTVShows.drama) },
        ],
    }

    return <BrowseContainer slides={slides} />
    
}
