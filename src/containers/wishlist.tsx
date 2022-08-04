import { useContext } from 'react'
import { WishListContext } from '../context/wishlist'
import { Card, Player, Wishlist } from '../components'
import { handleClickOnLikeButton } from '../utils/likeMovie'

export default function WishListContainer () {

    const { state, dispatch } = useContext(WishListContext)

    return (
        <Wishlist>
            <Wishlist.Title> My wishlist </Wishlist.Title>

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
                                onClick={() => handleClickOnLikeButton(item, true, dispatch)}
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
