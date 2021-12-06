import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import { useState, useEffect } from 'react'

export default function SignIn () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (email !== '' && password !=='') { 
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [email, password])

    return (
        <>
            <HeaderContainer> </HeaderContainer>
            <Form>
                <Form.Title> Please log in </Form.Title>
                <Form.Email 
                    placeholder="your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Password 
                    placeholder="your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Button method="POST" disabled={disabled}> Log in </Form.Button>
            </Form>
        </> 
    )
}
  