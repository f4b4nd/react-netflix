import { useContext } from 'react'

import { WishListContext } from '../../context/wishlist'

import { Card, Player } from '../../components'

export function BrowseMediaContentContainer ({category, slideRows}: IBrowseMediaContentContainer) {
    
    const { dispatch } = useContext(WishListContext)

    const handleClickOnLikeButton = (item: TslideRowMovie) => {
        dispatch({type: 'ADD_TO_WISHLIST', payload: item})
    }
    
    const handleClickOnDislikeButton = (item: TslideRowMovie) => {
        dispatch({type: 'REMOVE_FROM_WISHLIST', payload: item})
    }

    return (

    <Card.Group>

        {slideRows.map(slideRow => {

            if (slideRow.data.length === 0) {
                return null
            }

            return (
                <Card key={`${category}-${slideRow.title.toLowerCase()}`}>

                    <Card.Title> {slideRow.title} </Card.Title>

                    <Card.Entities>
                        {slideRow.data.map((item) => (
                            <Card.Item key={item.docId} item={item}>
                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                                    <Card.Actions>
                                        <Card.LikeButton src="/images/icons/like.png" onClick={() => handleClickOnLikeButton(item)} />
                                        <Card.LikeButton src="/images/icons/dislike.png" onClick={() => handleClickOnDislikeButton(item)} />
                                    </Card.Actions>
                                    <Card.SubTitle> {item.title} </Card.SubTitle>
                                    <Card.Text> {item.description} </Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))}
                    </Card.Entities>

                    <Card.Feature category={category}>
                        <Player>
                            <Player.Button />
                            <Player.Video src="/videos/netflix-intro.mp4" />
                        </Player>
                    </Card.Feature>
                    
                </Card>
            )
        
        })}

    </Card.Group>

    )
}