import { useState, useEffect } from 'react'

import { ROUTES } from '../../constants'

import { firebase } from "../../lib/firebase.prod"

import { Header, Player } from '../../components'

import { getFilteredSlideRow } from '../../utils/searchEngine'

import logo from '../../logo.svg'


export function BrowseHeaderContainer ({category, setCategory, slides, setSlideRows, profile, displayWishList, setDisplayWishList}: IBrowseHeaderContainer) {
    
    const [searchTerm, setSearchTerm] = useState<string>('')

    const onSearchTermChange = (slideRows: TslideRow[], searchterm: string) => {

        const preventSearch = searchterm.length < 1

        if (preventSearch) {
            setSlideRows(slideRows)
            return
        }

        const filteredSlideRows = slideRows.map(slideRow => getFilteredSlideRow(slideRow, searchterm))

        setSlideRows(filteredSlideRows)

    }

    useEffect(() => {
        
        const slideRows = slides[category as keyof Tslides]

        onSearchTermChange(slideRows, searchTerm)

    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, category])
    

    return (

    <Header src="joker1" bg={!displayWishList} dontShowOnSmallViewPort>

        <Header.Frame>

            <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />

                <Header.TextLink active={category === 'series'} onClick={() => {setCategory('series'); setDisplayWishList(false)}}>
                    Series
                </Header.TextLink>

                <Header.TextLink active={category === 'films'} onClick={() => {setCategory('films'); setDisplayWishList(false)}}>
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
                            <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                        </Header.Group>

                    </Header.Dropdown>

                </Header.Profile>
            

            </Header.Group>

        </Header.Frame>

        {!displayWishList &&
            <Header.Feature>

                <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>

                <Header.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                futile attempt to feel like he's part of the world around him.
                </Header.Text>

                <Player>
                    <Player.Button />
                    <Player.Video src="/videos/netflix-intro.mp4" />
                </Player>

            </Header.Feature>
        }

    </Header>
    )
}