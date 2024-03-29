import { HeaderContainer, JumbotronContainer, FaqsContainer, FooterContainer } from '../containers'

import { OptForm, Feature } from '../components'

export default function Home () {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title> Unlimited films, TV programms and more. </Feature.Title>
                <Feature.SubTitle> Watch anywhere. Cancel at any time. </Feature.SubTitle>
            
                <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                </OptForm>
                
            </Feature>
        </HeaderContainer>

        <JumbotronContainer />

        <FaqsContainer />
        
        <FooterContainer />
        </>
    )
}
