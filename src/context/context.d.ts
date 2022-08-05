/**FIREBASE */
interface IFirebaseContext  {
    user: IUser
}

/** PLAYER */

interface IPlayerContext {
    showPlayer: boolean,
    setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>,
}

/** FEATURE */

interface IFeatureContext {
    showFeature: boolean,
    setShowFeature: React.Dispatch<React.SetStateAction<boolean>>,
    itemFeature: TMovieAPI,
    setItemFeature: React.Dispatch<React.SetStateAction<TMovieAPI>>,
}

/** ACCORDION */
interface IToggleContext {
    toggleShow: boolean,
    setToggleShow: React.Dispatch<React.SetStateAction<boolean>>,
}

/** WISHLIST */
interface IWishListContext  {
    state: TMovieAPI[],
    dispatch: React.dispatch<IwishListAction>,
}

interface IwishListReducer {
    (state: TMovieAPI[], action: IwishListAction)
}

interface IwishListAction {
    type: 'ADD_TO_WISHLIST' | 'REMOVE_FROM_WISHLIST',
    payload: TMovieAPI
}