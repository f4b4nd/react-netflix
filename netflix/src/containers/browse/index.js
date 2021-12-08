import { useState, useEffect, useContext } from 'react'

import { SelectProfileContainer } from '../profiles'
import { BrowseMediaContentContainer } from './media-content'
import { BrowseHeaderContainer } from './header'
import { FirebaseContext } from '../../context/firebase'
import { FooterContainer } from '../footer'
import { Loading } from '../../components'
import { Browse } from '../../pages'

export function BrowseContainer({ slides }) {

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    const [category, setCategory] = useState('series')
    const [slideRows, setSlideRows] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [profile.displayName])
    
    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])


    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

            <BrowseHeaderContainer 
                user={user}
                category={category}
                setCategory={setCategory}
                slides={slides}
                setSlideRows={setSlideRows}
                slideRows={slideRows}
            />

            <BrowseMediaContentContainer 
                slideRows={slideRows}
                category={category}
            />

            <FooterContainer />
        </>
        ) : (
            <SelectProfileContainer 
                user={user} 
                setProfile={setProfile} 
            />  
        )
}

