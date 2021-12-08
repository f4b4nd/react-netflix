import { Card, Player } from '../components'

export function BrowseMediaContentContainer ({category, slideRows}) {
    
    return (
    <>

    <Card.Group>

        {slideRows.map((slideItem) => (

            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>

                <Card.Title> {slideItem.title} </Card.Title>

                <Card.Entities>
                    {slideItem.data.map((item) => (
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
                        <Player.Video src="/videos/bunny.mp4" />
                    </Player>
                </Card.Feature>
                
            </Card>
        ))}

    </Card.Group>


    </>
    )
}