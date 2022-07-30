import { useState, useEffect } from 'react'

import { ROUTES } from '../../constants'

import { firebase } from "../../lib/firebase.prod"

import { Header } from '../../components'

import logo from '../../logo.svg'


export function BrowseHeaderContainer ({user, category, setCategory, slides, setSlideRows, slideRows}: IBrowseHeaderContainer) {
    
    const [searchTerm, setSearchTerm] = useState<string>('')

    const getFilteredSlideRows = (slideRow: TslideRow, searchTerm: string) => {

        const results: TslideRow['data'] = []

        slideRow.data.forEach(movie => {
            if (movieMatches(movie, searchTerm)) {
                results.push(movie)
            }
        })

        const filteredSlideRow = {...slideRow, data: results}

        return filteredSlideRow
    }

    const movieMatches = (movie: TslideRowMovie, searchTerm: string) => {
        const searchTermLowerCase = searchTerm.toLocaleLowerCase()
        const titleMatches = movie.title.toLocaleLowerCase().includes(searchTermLowerCase)
        const descriptionMatches = movie.description.toLocaleLowerCase().includes(searchTermLowerCase)
        const genreMatches = movie.genre.toLocaleLowerCase().includes(searchTermLowerCase)
        const match = titleMatches || descriptionMatches || genreMatches
        return match
    }

    useEffect(() => {
        
        const filteredSlideRows = slideRows.map(slideRow => getFilteredSlideRows(slideRow, searchTerm))
        
        const hasResults = slideRows.length > 0 && filteredSlideRows.length > 0
        
        const preventSearch = searchTerm.length < 1

        if (hasResults && !preventSearch)  {
            setSlideRows(filteredSlideRows)
        } else {
            setSlideRows(slides[category as keyof Tslides])
        }

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])


    return (

    <Header src="joker1" dontShowOnSmallViewPort>

        <Header.Frame>

            <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />

                <Header.TextLink active={category === 'series'} onClick={() => setCategory('series')}>
                    Series
                </Header.TextLink>

                <Header.TextLink active={category === 'films'} onClick={() => setCategory('films')}>
                    Films
                </Header.TextLink>
            </Header.Group>

            <Header.Group>

                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <Header.Profile>

                    <Header.Picture src={user && user.photoURL} />

                    <Header.Dropdown>

                        <Header.Group>
                            <Header.Picture src={user && user.photoURL} />
                            <Header.TextLink>{user?.displayName}</Header.TextLink>
                        </Header.Group>

                        <Header.Group>
                            <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                        </Header.Group>

                    </Header.Dropdown>

                </Header.Profile>

            </Header.Group>

        </Header.Frame>

        <Header.Feature>

            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>

            <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
            </Header.Text>

            <Header.PlayButton>Play</Header.PlayButton>

        </Header.Feature>

    </Header>
    )
}