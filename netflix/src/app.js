import './app.scss'
 
import { Home, SignIn, SignUp, Browse } from './pages'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'

export default function App () {
  return (
    <>
    

    <Router>
      <Routes>

        <Route exact path={ROUTES.HOME} element={<Home/>}/>

        <Route exact path={ROUTES.SIGN_IN} element={<SignIn/>}/>

        <Route exact path={ROUTES.SIGN_UP} element={<SignUp/>}/>

        <Route exact path={ROUTES.BROWSE} element={<Browse/>}/>
      
      </Routes> 
    </Router>
    </>
  )
}

