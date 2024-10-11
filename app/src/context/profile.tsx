import { useState, createContext } from 'react'

export const ProfileContext = createContext<ProfileContextProps>({
    profile: {} as TProfile,
    setProfile: () => null,
})

export const ProfileContextProvider = ({children}: IChildren) => {

    const [profile, setProfile] = useState<TProfile>({} as TProfile)

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    )

}
