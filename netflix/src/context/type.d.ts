/**FIREBASE */
interface IFirebaseContext  {
    user: IUser
}

interface IPlayerContext {
    showPlayer: boolean,
    setShowPlayer: React.Dispatch<boolean>,
}