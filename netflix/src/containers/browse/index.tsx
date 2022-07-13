import { useState, useEffect } from 'react'

import { SelectProfileContainer } from '../profiles'

import { BrowseMediaContentContainer } from './mediaContent'
import { BrowseHeaderContainer } from './header'

import { FooterContainer } from '../footer'
import { Loading } from '../../components'

import { firebase } from '../../lib/firebase.prod'

export function BrowseContainer({ slides }: {slides: any}) {

    const user = firebase.auth().currentUser || null

    const [profile, setProfile] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true)

    const [category, setCategory] = useState<string>('series')
    const [slideRows, setSlideRows] = useState<any[]>([])

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
            {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}

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
