import FaqsContainer from '../containers/faqs'
import JumbotronContainer from '../containers/jumbotron'
import FooterContainer from '../containers/footer'
import { HeaderContainer } from '../containers/header'

import { OptForm } from '../components'

export default function Home () {
  return (
      <>
        <HeaderContainer>        
            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
        </HeaderContainer>

        <JumbotronContainer />      
        <FaqsContainer />
        <FooterContainer />
    </>
    )
}
