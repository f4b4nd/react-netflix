import { useState, useEffect } from "react"

//import { FirebaseContext } from "../context/firebase"

import  { firebase } from "../lib/firebase.prod"

export default function useAuthListener() {

    const localStorageUser = localStorage.getItem('authUser') ?? null

    const [user, setUser] = useState<IUser>(localStorageUser ? JSON.parse(localStorageUser) : null)

    function setUserToLocalStorage (authUser: IUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
    }

    function removeUserFromLocalStorage () {
        localStorage.removeItem('authUser')
        setUser(null)
    }

    useEffect(() => {

        const listener = firebase.auth().onAuthStateChanged((authUser: IUser) => {
            if (authUser) {
                setUserToLocalStorage(authUser)
            } else {
                removeUserFromLocalStorage()
            }
        })

        return () => listener && listener()

    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { user }
}