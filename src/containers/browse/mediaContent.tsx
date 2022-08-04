import { useContext } from 'react'

import { WishListContext } from '../../context/wishlist'
import { handleClickOnLikeButton } from '../../utils/likeMovie'
import { Card, Player } from '../../components'


export function BrowseMediaContentContainer ({category, slideRows}: IBrowseMediaContentContainer) {
    
    const { state, dispatch } = useContext(WishListContext)

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
                        {slideRow.data.map((item) => {

                            const itemIsLiked = state.filter(movie => movie.id === item.id).length > 0

                            return (
                            <Card.Item key={item.docId} item={item}>
                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                                    <Card.Actions>
                                        <Player>
                                            <Player.Button asIcon={true} />
                                            <Player.Video src="/videos/netflix-intro.mp4" />
                                        </Player>
                                        <Card.LikeButton 
                                            src="/images/icons/like.png" 
                                            onClick={() => handleClickOnLikeButton(item, itemIsLiked, dispatch)}
                                            isActive={itemIsLiked}
                                        />    
                                    </Card.Actions>
                                    <Card.SubTitle> {item.title} </Card.SubTitle>
                                    <Card.Text> {item.description} </Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        )}
                        )}
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