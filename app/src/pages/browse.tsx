import { useFetchAPI } from '../hooks'

import { BrowseContainer } from '../containers'

import { API_ROUTES } from '../lib/themoviedb.prod'

export default function Browse () {
    
    const slides = {
        films: [
            { title: 'Animation', data: useFetchAPI(API_ROUTES.geTMovies.animation) },
            { title: 'Comedy', data: useFetchAPI(API_ROUTES.geTMovies.comedy) },
            { title: 'Documentary',  data: useFetchAPI(API_ROUTES.geTMovies.documentary) },
            { title: 'Drama', data: useFetchAPI(API_ROUTES.geTMovies.drama) },
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
