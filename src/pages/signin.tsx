import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import  { firebase } from "../lib/firebase.prod"

import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

import { ROUTES } from '../constants'

export default function SignIn () {

    const navigate = useNavigate()

    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    
    const isInvalid = password === '' || emailAddress === ''
    
    const handleSignIn = (event: React.FormEvent) => {

        event.preventDefault()

        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => { 
                navigate(ROUTES.BROWSE)
            })
            .catch(error => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
    <>
        <HeaderContainer>
            <Form>

                <Form.Title>Sign In</Form.Title>

                {error && <Form.Error data-testid="error">{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">

                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value as string)}
                    />

                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Form.Submit 
                        disabled={isInvalid} 
                        type="submit" 
                        data-testid="sign-in"
                    >
                        Sign In
                    </Form.Submit>

                </Form.Base>

                <Form.Text>
                    New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                </Form.Text>

                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            
            </Form>
        </HeaderContainer>

        <FooterContainer />    
    </>
    )
}
  