import { useState, useEffect, useContext } from 'react'
import Fuse from 'fuse.js'
import { SelectProfileContainer } from './profiles'
import { HeaderContainer } from './header'
import { BrowseMediaContentContainer } from './browse-media-content'
import { FirebaseContext } from '../context/firebase'

export function BrowseContainer({ slides }) {

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    const [category, setCategory] = useState('series')
    const [slideRows, setSlideRows] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])
    
    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] })
        const results = fuse.search(searchTerm).map(({ item }) => item)
    
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results)
        } else {
            setSlideRows(slides[category])
        }
    }, [searchTerm])
    
    console.log(user)
    return profile.displayName ? (
            <BrowseMediaContentContainer 
                user={user}
            />
        ) : (
            <SelectProfileContainer 
                user={user} 
                setProfile={setProfile} 
            />  
        )
        

}