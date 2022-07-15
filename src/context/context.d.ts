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
    itemFeature: TitemFeature,
    setItemFeature: React.Dispatch<React.SetStateAction<TitemFeature>>,
}

/** ACCORDION */
interface IToggleContext {
    toggleShow: boolean,
    setToggleShow: React.Dispatch<React.SetStateAction<boolean>>,
}