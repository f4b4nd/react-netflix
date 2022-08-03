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
    itemFeature: TMovie,
    setItemFeature: React.Dispatch<React.SetStateAction<TMovie>>,
}

/** ACCORDION */
interface IToggleContext {
    toggleShow: boolean,
    setToggleShow: React.Dispatch<React.SetStateAction<boolean>>,
}

/** WISHLIST */
interface IWishListContext  {
    state: TMovie[],
    dispatch: React.dispatch<Action>,
}

interface IwishListReducer {
    (state: TMovie[], action: IwishListAction)
}

interface IwishListAction {
    type: 'ADD_TO_WISHLIST' | 'REMOVE_FROM_WISHLIST',
    payload: TMovie
}