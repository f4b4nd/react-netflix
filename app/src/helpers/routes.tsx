import { Navigate } from "react-router-dom"

import { ROUTES  } from '../constants'


export function IsUserRedirect ({loggedInPath, children, user}: IsUserRedirectProps) {
    if (user) {        
        return <Navigate to={loggedInPath} />
    }
    return <> { children } </>
}

export function ProtectedRoute ({user, children}: ProtectedRouteProps) {
    if (user) {
        return <> { children } </>
    }
    return <Navigate to={ROUTES.SIGN_IN} />
}