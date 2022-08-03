import { Header } from '../components'

import { ROUTES } from '../constants'

import logo from '../logo.svg'

import signInAnonymously from '../utils/signInAnymously';

export function HeaderContainer({ children }: IChildren) {
    return (
        <Header>

          <Header.Frame>

              <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
              
              <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>

              <Header.Button onClick={() => signInAnonymously()}> Guest</Header.Button>

          </Header.Frame>

          {children}

        </Header>
    )
}