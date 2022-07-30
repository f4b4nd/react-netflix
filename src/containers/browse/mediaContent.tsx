import { Card, Player } from '../../components'

export function BrowseMediaContentContainer ({category, slideRows}: IBrowseMediaContentContainer) {
    
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