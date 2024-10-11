interface IsUserRedirectProps extends IChildren {
    loggedInPath: string,
    user: TUsers
}

interface ProtectedRouteProps extends IChildren {
    user: TUsers

}