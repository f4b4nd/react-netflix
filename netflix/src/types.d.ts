
/** USER */

interface IFirebaseContext  {
    user: IUser
}

type IUser = import('firebase').User | null

/**FIREBASE */

interface IFirebaseContextProvider {
    children: React.ReactNode
}