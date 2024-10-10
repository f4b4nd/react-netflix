import { createContext } from 'react'

import { useAuthListener } from '../hooks'

export const FirebaseContext = createContext<IFirebaseContext>({
    user: null
})

export const FirebaseContextProvider = ({children}: IChildren) => {

    const { user } = useAuthListener()

    return (
        <FirebaseContext.Provider value={{ user }}>
            {children}
        </FirebaseContext.Provider>
    )

}
