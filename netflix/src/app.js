import Jumbotron  from "./components/jumbotron"
import jumboData from './fixtures/jumbo.json'


export default function App() {
  return (
    <Jumbotron.Container>
      {
        jumboData.map(v => 
          <Jumbotron key={v.id} direction={v.direction}>
            <p> {v.title} </p>
            <p> {v.subTitle} </p>
            <p> {v.title} </p>
            <p> {v.image} </p>
            <p> {v.alt} </p>
          </Jumbotron>
        )
      }      
    </Jumbotron.Container>
  )
}

