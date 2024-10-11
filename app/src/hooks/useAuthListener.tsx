import { useState, useEffect } from "react"

import  { firebase } from "../lib/firebase.prod"

export default function useAuthListener() {

    const localStorageUser = localStorage.getItem('authUser') ?? null

    const [user, setUser] = useState<TUsers>(localStorageUser ? JSON.parse(localStorageUser) : null)

    function setUserToLocalStorage (authUser: TUsers) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
    }

    function removeUserFromLocalStorage () {
        localStorage.removeItem('authUser')
        setUser(null)
    }

    useEffect(() => {

        const listener = firebase.auth().onAuthStateChanged((authUser: TUsers) => {
            if (authUser) {
                setUserToLocalStorage(authUser)
            } else {
                removeUserFromLocalStorage()
            }
        })

        return () => listener()

    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { user }
}