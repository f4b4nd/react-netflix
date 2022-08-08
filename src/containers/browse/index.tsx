import { useState, useEffect } from 'react'

import { firebase } from '../../lib/firebase.prod'

import { BrowseHeaderContainer, BrowseMediaContentContainer, SelectProfileContainer, FooterContainer, WishListContainer} from '../../containers'

import { Loading } from '../../components'



export default function BrowseContainer({ slides }: IBrowserContainer) {

    const user = firebase.auth().currentUser || null

    const [profile, setProfile] = useState<Tprofile>({} as Tprofile)

    const [loading, setLoading] = useState<boolean>(true)

    const [category, setCategory] = useState<Tcategory>('series')

    const [slideRows, setSlideRows] = useState<TslideRowAPI[]>([])

    const [displayWishList, setDisplayWishList] = useState<boolean>(false)

    useEffect(() => {

        if (profile.displayName) {
            setLoading(false)
        }        

    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category as keyof TslidesAPI])
        setDisplayWishList(false)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides])

    useEffect(() => {
        if (user && user.isAnonymous) {

            setTimeout(() => {
                setProfile({ displayName: "Guest", photoURL: "guest" })
            }, 500)
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
                    setProfile={setProfile}
                    category={category}
                    setCategory={setCategory}
                    slides={slides}
                    setSlideRows={setSlideRows}
                    displayWishList={displayWishList}
                    setDisplayWishList={setDisplayWishList}
                />

                {displayWishList ?
                    (
                        <WishListContainer />
                    ) : (
                        <BrowseMediaContentContainer 
                            slideRows={slideRows}
                            category={category}
                        />
                    )
                }
                
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
