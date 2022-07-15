/**FIREBASE */
interface IFirebaseContext  {
    user: IUser
}

interface IPlayerContext {
    showPlayer: boolean,
    setShowPlayer: React.Dispatch<boolean>,
}

interface IFeatureContext {
    showFeature: boolean,
    setShowFeature: React.Dispatch<boolean>,
    itemFeature: TitemFeature,
    setItemFeature: React.Dispatch<TitemFeature>,
}