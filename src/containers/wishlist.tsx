import { useContext } from 'react'
import { WishListContext } from '../context/wishlist'
import { Card, Player, Wishlist } from '../components'
import { handleClickOnLikeButton } from '../utils/likeMovie'

export default function WishListContainer () {

    const { state, dispatch } = useContext(WishListContext)

    const itemIsLiked = true

    return (
        <Wishlist>
            <Wishlist.Title> My wishlist </Wishlist.Title>

            {state.length === 0 &&  
                <Wishlist.SubTitle> Your wishlist is currently empty &#9785;&#65039; </Wishlist.SubTitle>
            }

            <Wishlist.Grid>

            {state.map(item => (
                <Card.Item key={item.docId} item={item}>
                    <Card.Image src={`/images/series/${item.genre}/${item.slug}/small.jpg`} />
                    <Card.Meta>
                        <Card.Actions>
                            <Player>
                                <Player.Button asIcon={true} />
                                <Player.Video src="/videos/netflix-intro.mp4" />
                            </Player>
                            <Card.LikeButton 
                                src="/images/icons/like.png" 
                                onClick={() => handleClickOnLikeButton(item, itemIsLiked, dispatch)}
                                isActive={true}
                            />

                        </Card.Actions>
                        <Card.SubTitle> {item.title} </Card.SubTitle>
                        <Card.Text> {item.description} </Card.Text>
                    </Card.Meta>
                </Card.Item>
            ))
            }

            </Wishlist.Grid>
        </Wishlist>
    )
}
