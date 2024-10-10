import { Header } from '../components'

import { ROUTES } from '../constants'

import signInAnonymously from '../utils/signInAnymously'

export default function HeaderContainer({ children }: IChildren) {
    return (
        <Header src="/images/misc/home-bg.jpg">

          <Header.Frame>

              <Header.Logo to={ROUTES.HOME} src="/images/icons/logo.svg" alt="Netflix" />
              
              <Header.Group>

                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>

                <Header.Button onClick={() => signInAnonymously()}> Try as Guest</Header.Button>

              </Header.Group>
          </Header.Frame>

          {children}

        </Header>
    )
}