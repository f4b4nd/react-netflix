import { useState, useEffect, useMemo, useContext } from 'react';

import { ROUTES } from '../../constants'

import { getImgURL, API_ROUTES } from '../../lib/themoviedb.prod'

import { useFetchAPI } from '../../hooks'

import { firebase } from "../../lib/firebase.prod"

import { Header, Player } from '../../components'

import { getFilteredSlideRow } from '../../utils/searchEngine'

import { ProfileContext } from '../../context/profile'


export default function BrowseHeaderContainer ({category, seTCategory, slides, seTSlideRows, displayWishList, setDisplayWishList}: BrowseHeaderContainerProps) {
    
    const [searchTerm, setSearchTerm] = useState<string>('')

    const {profile, seTProfile} = useContext(ProfileContext)

    const getTopRatedMovies = useFetchAPI(API_ROUTES.getTopRatedMovies)
    //eslint-disable-next-line react-hooks/exhaustive-deps
    const randomMovieIndex = useMemo(() => Math.floor(Math.random() * getTopRatedMovies.length), [])
    const topMovie = getTopRatedMovies[randomMovieIndex]

    const onSearchTermChange = (slideRows: TSlideRowAPI[], searchterm: string) => {

        const preventSearch = searchterm.length < 1

        if (preventSearch) {
            seTSlideRows(slideRows)
            return
        }

        const filteredSlideRows = slideRows.map(slideRow => getFilteredSlideRow(slideRow, searchterm))

        seTSlideRows(filteredSlideRows)

    }

    const onSignOut = () => {
        seTProfile({displayName: null, photoURL: ""})
        firebase.auth().signOut()
    }

    useEffect(() => {
        
        const slideRows = slides[category as keyof TSlides]

        onSearchTermChange(slideRows, searchTerm)
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, category])
    

    return (

    <Header src={getImgURL(topMovie?.backdrop_path, 'original')} bg={!displayWishList} dontShowOnSmallViewPort>

        <Header.Frame>

            <Header.Group>
                <Header.Logo to={ROUTES.HOME} src="/images/icons/logo.svg" alt="Netflix" />

                <Header.TextLink active={category === 'series'} onClick={() => {seTCategory('series'); setDisplayWishList(false)}}>
                    Series
                </Header.TextLink>

                <Header.TextLink active={category === 'films'} onClick={() => {seTCategory('films'); setDisplayWishList(false)}}>
                    Films
                </Header.TextLink>
            </Header.Group>

            <Header.Group>

                <Header.Text cursor="pointer" onClick={() => setDisplayWishList(!displayWishList)}> My Wishlist </Header.Text>

                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <Header.Profile>

                    <Header.Picture src={profile.photoURL} />

                    <Header.Dropdown>

                        <Header.Group>
                            <Header.Picture src={profile.photoURL} />
                            <Header.TextLink>{profile.displayName}</Header.TextLink>
                        </Header.Group>

                        <Header.Group>
                            <Header.TextLink onClick={() => onSignOut()}>Sign out</Header.TextLink>
                        </Header.Group>

                    </Header.Dropdown>

                </Header.Profile>
            
            </Header.Group>

        </Header.Frame>

        {!displayWishList &&
            <Header.Feature>

                <Header.FeatureCallOut>Watch {topMovie?.title} Now</Header.FeatureCallOut>

                <Header.Text> {topMovie?.overview} </Header.Text>

                <Player>
                    <Player.Button />
                    <Player.Video src="/videos/netflix-intro.mp4" />
                </Player>

            </Header.Feature>
        }

    </Header>
    )
}