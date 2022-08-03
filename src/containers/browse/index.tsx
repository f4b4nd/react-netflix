import { useState, useEffect } from 'react'

import { SelectProfileContainer } from '../profiles'

import { BrowseMediaContentContainer } from './mediaContent'

import { BrowseHeaderContainer } from './header'

import { FooterContainer } from '../footer'

import { Loading } from '../../components'

import { firebase } from '../../lib/firebase.prod'

export function BrowseContainer({ slides }: IBrowserContainer) {

    const user = firebase.auth().currentUser || null

    const [profile, setProfile] = useState<Tprofile>({} as Tprofile)

    const [loading, setLoading] = useState<boolean>(true)

    const [category, setCategory] = useState<Tcategory>('series')

    const [slideRows, setSlideRows] = useState<TslideRows>([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category as keyof Tslides])
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides])

    useEffect(() => {
        if (user && user.isAnonymous) {
            setProfile({ displayName: "Guest", photoURL: "guest" })
        }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <>
            {profile.displayName && 
                <>
                
                {loading ? <Loading src={user && !user.isAnonymous ? user.photoURL : "guest"} /> : <Loading.ReleaseBody />}

                <BrowseHeaderContainer 
                    profile={profile}
                    category={category}
                    setCategory={setCategory}
                    slides={slides}
                    setSlideRows={setSlideRows}
                />

                <BrowseMediaContentContainer 
                    slideRows={slideRows}
                    category={category}
                />

                <FooterContainer />

                </>
            }

            {!user?.isAnonymous && !profile.displayName && 
            
                <SelectProfileContainer 
                    user={user} 
                    setProfile={setProfile} 
                /> 
                
            }

        </>
    )

}
