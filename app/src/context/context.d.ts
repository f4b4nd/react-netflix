/**FIREBASE */
interface FirebaseContextProps  {
    user: TUsers
}

/** PLAYER */

interface PlayerContextProps {
    showPlayer: boolean,
    setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>,
}

/** FEATURE */

interface FeatureContextProps {
    showFeature: boolean,
    setShowFeature: React.Dispatch<React.SetStateAction<boolean>>,
    itemFeature: TMovieAPI,
    setItemFeature: React.Dispatch<React.SetStateAction<TMovieAPI>>,
}

/** ACCORDION */
interface ToggleContextProps {
    toggleShow: boolean,
    setToggleShow: React.Dispatch<React.SetStateAction<boolean>>,
}

/** WISHLIST */
interface WishListContextProps  {
    state: TMovieAPI[],
    dispatch: React.dispatch<WishListActionProps>,
}

interface WishListReducerProps {
    (state: TMovieAPI[], action: WishListActionProps)
}

interface WishListActionProps {
    type: 'ADD_TO_WISHLIST' | 'REMOVE_FROM_WISHLIST',
    payload: TMovieAPI
}

/**PROFILE */
interface ProfileContextProps {
    profile: TProfile,
    setProfile: React.Dispatch<React.SetStateAction<TProfile>>
}