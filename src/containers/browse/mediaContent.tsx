import { useContext } from 'react'

import { WishListContext } from '../../context/wishlist'
import { handleClickOnLikeButton } from '../../utils/likeMovie'
import { Card, Carousel, Player } from '../../components'
import { getImgURL } from '../../lib/themoviedb.prod'


export default function BrowseMediaContentContainer ({category, slideRows}: IBrowseMediaContentContainer) {
    
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

                    <Carousel>
                        <Carousel.Gallery>
                        {slideRow.data.map((item) => {

                            const itemIsLiked = state.filter(movie => movie.id === item.id).length > 0

                            return (
                            <Card.Item key={item.id} item={item} width="250px">
                                <Card.Image src={getImgURL(item.poster_path)} />
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
                                    <Card.SubTitle> {item.name || item.title } </Card.SubTitle>
                                    <Card.Text> {item.overview} </Card.Text>
                                </Card.Meta>
                            </Card.Item>
                            )
                        })}
                        </Carousel.Gallery>
                    </Carousel>

                    <Card.Feature>
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