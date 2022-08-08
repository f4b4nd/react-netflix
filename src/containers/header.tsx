import { Header } from '../components'

import { ROUTES } from '../constants'

import logo from '../logo.svg'

import signInAnonymously from '../utils/signInAnymously'

export default function HeaderContainer({ children }: IChildren) {
    return (
        <Header>

          <Header.Frame>

              <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
              
              <Header.Group>

                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>

                <Header.Button onClick={() => signInAnonymously()}> Try as Guest</Header.Button>

              </Header.Group>
          </Header.Frame>

          {children}

        </Header>
    )
}