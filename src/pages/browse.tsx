import { useContent } from '../hooks'

import useFetchAPI from '../hooks/useFetchAPI'


import selectionFilter from '../utils/selectionFilter'

import { BrowseContainer } from '../containers/browse'

import { API_ROUTES } from '../lib/themoviedb.prod'

export default function Browse () {

    const { series }  = useContent('series')
    
    const { films }  = useContent('films')

    const slides = selectionFilter({ series, films })

    const movies = useFetchAPI(API_ROUTES.getMovie({type: 'tv', itemID: '2'}))

    return <BrowseContainer slides={slides} />
    
}
