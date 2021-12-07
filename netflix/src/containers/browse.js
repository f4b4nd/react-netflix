import { useState, useEffect, useContext } from 'react'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'
import { HeaderContainer } from './header'

export function BrowseContainer({ slides }) { 
    return (
        <HeaderContainer />
    )
}