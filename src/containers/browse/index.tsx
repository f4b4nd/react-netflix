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
        }, 2000)
    }, [profile.displayName])
    
    return (
        <>
            {profile.displayName && 
                <>
                
                {loading ? <Loading src={user && user.photoURL} /> : <Loading.ReleaseBody />}

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
                    setProfile={setProfile} 
                /> 
                
            }

        </>
    )

}
