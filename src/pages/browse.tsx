import { useFetchAPI } from '../hooks'

import { BrowseContainer } from '../containers/browse'

import { API_ROUTES } from '../lib/themoviedb.prod'

export default function Browse () {

    const movies = useFetchAPI(API_ROUTES.getMovieByID('2'))

    const slides = {
        films: [
            { title: 'Action', data: useFetchAPI(API_ROUTES.getMovies.action) },
            { title: 'Animation', data: useFetchAPI(API_ROUTES.getMovies.animation) },
            { title: 'Comedy', data: useFetchAPI(API_ROUTES.getMovies.comedy) },
            { title: 'Documentary',  data: useFetchAPI(API_ROUTES.getMovies.documentary) },
            { title: 'Drama', data: useFetchAPI(API_ROUTES.getMovies.drama) },
            { title: 'Science-Fiction', data: useFetchAPI(API_ROUTES.getMovies.scifi) },
        ],
        series: [
            { title: 'Animation', data: useFetchAPI(API_ROUTES.getTVShows.animation) },
            { title: 'Comedy', data: useFetchAPI(API_ROUTES.getTVShows.comedy) },
            { title: 'Documentary',  data: useFetchAPI(API_ROUTES.getTVShows.documentary) },
            { title: 'Drama', data: useFetchAPI(API_ROUTES.getTVShows.drama) },
            { title: 'Science-Fiction', data: useFetchAPI(API_ROUTES.getTVShows.scifi) },
        ],
    }

    return <BrowseContainer slides={slides} />
    
}
