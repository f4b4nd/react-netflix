import { useContext } from 'react'
import { WishListContext } from '../context/wishlist'
import { Card } from '../components'
import { handleClickOnLikeButton, handleClickOnDislikeButton } from '../utils/likeMovie'

export default function WishListContainer () {

    const { state, dispatch } = useContext(WishListContext)

    return (
        <>
            <Card.Entities>

            {state.map(item => (
                <Card.Item key={item.docId} item={item}>
                    <Card.Image src={`/images/series/${item.genre}/${item.slug}/small.jpg`} />
                    <Card.Meta>
                        <Card.Actions>
                            <Card.LikeButton src="/images/icons/like.png" onClick={() => handleClickOnLikeButton(item, dispatch)} />
                            <Card.LikeButton src="/images/icons/dislike.png" onClick={() => handleClickOnDislikeButton(item, dispatch)} />
                        </Card.Actions>
                        <Card.SubTitle> {item.title} </Card.SubTitle>
                        <Card.Text> {item.description} </Card.Text>
                    </Card.Meta>
                </Card.Item>
            ))
            }

            </Card.Entities>
        </>
    )
}
