interface IIsUserRedirect extends IChildren {
    loggedInPath: string,
    user: IUser
}

interface IProtectedRoute extends IChildren {
    user: IUser

}