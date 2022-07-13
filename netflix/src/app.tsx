import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

import { FirebaseContext } from './context/firebase'

import { Home, SignIn, SignUp, Browse } from './pages'

import { ROUTES } from './constants'

import './app.css'
import { useContext } from 'react';


export default function App () {

    const { user } = useContext(FirebaseContext)

    return (
    <>
    <Router>
        <Routes>
        
            <Route path={ROUTES.HOME} element={
                <>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                    <Home/>
                </IsUserRedirect>
                </>
            }/>
            
            <Route path={ROUTES.SIGN_IN} element={
                <>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                    <SignIn/>
                </IsUserRedirect>
                </>
            }/>
                        
            <Route path={ROUTES.SIGN_UP} element={
                <>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                    <SignUp/>
                </IsUserRedirect>
                </>
            }/>

            <Route path={ROUTES.BROWSE} element={
                <>
                <ProtectedRoute user={user}>
                    <Browse/>
                </ProtectedRoute>
                </>
            }/>
        
        </Routes> 
    </Router>
    </>
    )
}

