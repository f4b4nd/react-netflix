import Jumbotron  from "./components/jumbotron"
import jumboData from './fixtures/jumbo.json'


export default function App() {
  return (
    <Jumbotron.Container>
      {
        jumboData.map(v => 
          <Jumbotron key={v.id} direction={v.direction}>
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
}

