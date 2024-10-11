import { useState, useEffect, useContext } from 'react'

import { firebase } from '../../lib/firebase.prod'

import { BrowseHeaderContainer, BrowseMediaContentContainer, SelecTProfileContainer, FooterContainer, WishListContainer} from '../../containers'

import { Loading } from '../../components'

import { ProfileContext } from '../../context/profile'


export default function BrowseContainer({ slides }: BrowserContainerProps) {

    const user = firebase.auth().currentUser || null

    const {profile, seTProfile} = useContext(ProfileContext)

    const [loading, setLoading] = useState<boolean>(false)

    const [category, seTCategory] = useState<TCategory>('series')

    const [slideRows, seTSlideRows] = useState<TSlideRowAPI[]>([])

    const [displayWishList, setDisplayWishList] = useState<boolean>(false)

    const userHasProfile: boolean = profile.displayName != null

    const userMustChooseProfile: boolean = !user?.isAnonymous && !userHasProfile

    useEffect(() => {
        seTSlideRows(slides[category as keyof TSlidesAPI])
        setDisplayWishList(false)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides])

    useEffect(() => {
        if (user?.isAnonymous && !userHasProfile) {
            seTProfile({ displayName: "Guest", photoURL: "guest" })
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
                    seTCategory={seTCategory}
                    slides={slides}
                    seTSlideRows={seTSlideRows}
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
            
                <SelecTProfileContainer 
                    user={user} 
                    setLoading={setLoading}
                />

            }

        </>
    )

}
