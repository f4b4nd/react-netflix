import { useContext } from 'react'

import { ROUTES } from '../constants'

import { Header, Profiles } from '../components'

import { ProfileContext } from '../context/profile'


export default function SelectProfileContainer({ user, setLoading }: SelectProfileContainerProps) {

    const {setProfile} = useContext(ProfileContext)

    const handleClickOnUserProfile = (user: TUsers) => {
 
        if (user && user.displayName && user.photoURL) {
            setProfile({ displayName: user.displayName, photoURL: user.photoURL || ""})
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 700)
        }

    }

    return (
        <>

        <Header bg={false}>

            <Header.Frame>

                <Header.Logo to={ROUTES.HOME} src="/images/icons/logo.svg" alt="Netflix" />
                
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