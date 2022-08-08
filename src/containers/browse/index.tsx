import { useState, useEffect, useContext } from 'react'

import { firebase } from '../../lib/firebase.prod'

import { BrowseHeaderContainer, BrowseMediaContentContainer, SelectProfileContainer, FooterContainer, WishListContainer} from '../../containers'

import { Loading } from '../../components'

import { ProfileContext } from '../../context/profile'


export default function BrowseContainer({ slides }: IBrowserContainer) {

    const user = firebase.auth().currentUser || null

    const {profile, setProfile} = useContext(ProfileContext)

    const [loading, setLoading] = useState<boolean>(false)

    const [category, setCategory] = useState<Tcategory>('series')

    const [slideRows, setSlideRows] = useState<TslideRowAPI[]>([])

    const [displayWishList, setDisplayWishList] = useState<boolean>(false)

    const userHasProfile: boolean = !(!profile.displayName || profile.displayName === null)

    const userMustChooseProfile: boolean = !user?.isAnonymous && !userHasProfile

    useEffect(() => {
        setSlideRows(slides[category as keyof TslidesAPI])
        setDisplayWishList(false)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides])

    useEffect(() => {
        if (user?.isAnonymous && !userHasProfile) {
            setProfile({ displayName: "Guest", photoURL: "guest" })
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 700)
        }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.isAnonymous])

    return (
        <>
            {loading ? 
                <Loading src={user && !user?.isAnonymous ? user.photoURL : profile.photoURL} /> : <Loading.ReleaseBody />
            }

            {profile.displayName && 
                <>
                
                <BrowseHeaderContainer 
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

            {userMustChooseProfile  && 
            
                <SelectProfileContainer 
                    user={user} 
                    setLoading={setLoading}
                />

            }

        </>
    )

}
