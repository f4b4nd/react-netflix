import { Navigate } from "react-router-dom"
import * as ROUTES from '../constants/routes'


export function IsUserRedirect ({loggedInPath, children, user, ...rest}) {
    if (user) {        
        return <Navigate to={loggedInPath} />
    }
    return children
}

export function ProtectedRoute ({user, children}) {
    if (user) {
        return children
    }
    return <Navigate to={ROUTES.SIGN_IN} />
}