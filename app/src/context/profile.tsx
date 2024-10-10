import { useState, createContext } from 'react'

export const ProfileContext = createContext<IProfileContext>({
    profile: {} as Tprofile,
    setProfile: () => null,
})

export const ProfileContextProvider = ({children}: IChildren) => {

    const [profile, setProfile] = useState<Tprofile>({} as Tprofile)

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    )

}
