import { Jumbotron }  from "../components"
import jumboData from '../fixtures/jumbo.json'


const JumbotronContainer = () => (
    <Jumbotron.Container>
        {
            jumboData.map(v => 
                <Jumbotron key={v.id} flexDirection={v.direction as IJumbotron['flexDirection']}>

                    <Jumbotron.Pane>
                        <Jumbotron.Title> {v.title} </Jumbotron.Title>
                        <Jumbotron.SubTitle> {v.subTitle} </Jumbotron.SubTitle>
                    </Jumbotron.Pane>

                    <Jumbotron.Pane>
                        <Jumbotron.Image src={v.image} alt={v.alt} />
                    </Jumbotron.Pane>
                  
                </Jumbotron>
          )
        }      
    </Jumbotron.Container>
)


export default JumbotronContainer