import { Navigate } from "react-router-dom"

import { ROUTES  } from '../constants'


export function IsUserRedirect ({loggedInPath, children, user}: IIsUserRedirect) {
    if (user) {        
        return <Navigate to={loggedInPath} />
    }
    return <> { children } </>
}

export function ProtectedRoute ({user, children}: IProtectedRoute) {
    if (user) {
        return <> { children } </>
    }
    return <Navigate to={ROUTES.SIGN_IN} />
}