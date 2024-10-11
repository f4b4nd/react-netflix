import { useState, createContext } from 'react'

export const ProfileContext = createContext<ProfileContextProps>({
    profile: {} as TProfile,
    seTProfile: () => null,
})

export const ProfileContextProvider = ({children}: IChildren) => {

    const [profile, seTProfile] = useState<TProfile>({} as TProfile)

    return (
        <ProfileContext.Provider value={{ profile, seTProfile }}>
            {children}
        </ProfileContext.Provider>
    )

}
