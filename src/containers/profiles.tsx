import { ROUTES } from '../constants'

import logo from '../logo.svg'

import { Header, Profiles } from '../components'


export function SelectProfileContainer({ user, setProfile }: ISelectProfileContainer) {

    const handleClickOnUserProfile = (user: IUser) => {
 
        if (user && user.displayName && user.photoURL) {
            setProfile({ displayName: user.displayName, photoURL: user.photoURL })
            return
        }

    }

    return (
        <>

        <Header bg={false}>

            <Header.Frame>

                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                
            </Header.Frame>

        </Header>

        <Profiles>

            <Profiles.Title>Who's watching?</Profiles.Title>

            <Profiles.List>

                <Profiles.User
                    onClick={() => handleClickOnUserProfile(user)}
                    data-testid="user-profile"
                >
                    <Profiles.Picture src={user && user.photoURL} />
                    <Profiles.Name>{user?.displayName}</Profiles.Name>

                </Profiles.User>

            </Profiles.List>

        </Profiles>

        </>
    )
}