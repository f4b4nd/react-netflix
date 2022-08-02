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
        }, 1000)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category as keyof Tslides])
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides])

    return (
        <>
            {profile.displayName && 
                <>
                
                {loading ? <Loading src={user ? user.photoURL : "guest"} /> : <Loading.ReleaseBody />}

                <BrowseHeaderContainer 
                    user={user}
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

            {!profile.displayName && 
            
                <SelectProfileContainer 
                    user={user} 
                    profile={profile}
                    setProfile={setProfile} 
                /> 
                
            }

        </>
    )

}
