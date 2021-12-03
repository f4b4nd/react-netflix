import './app.scss'

import FaqsContainer from './containers/faqs'
import JumbotronContainer from './containers/jumbotron'
import FooterContainer from './containers/footer'


export default function App() {
  return (
    <>
      <JumbotronContainer />      
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}

