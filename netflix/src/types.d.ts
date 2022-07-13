/*** Children */

interface IChildren {
    children?: React.ReactNode
}

/** USER */

interface IFirebaseContext  {
    user: IUser
}

type IUser = import('firebase').User | null

/**FIREBASE */

interface IFirebaseContextProvider {
    children: React.ReactNode
}
