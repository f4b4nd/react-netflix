import './app.scss'
import Home from './pages/home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'

export default function App () {
  return (
    <Router>
      <Routes>

        <Route exact path={ROUTES.HOME} element={<Home /> }/>          
      
      </Routes> 
    </Router>
  )
}

