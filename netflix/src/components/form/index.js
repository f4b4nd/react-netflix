import { Container, Title, Email, Password, Button } from "./styles/form"

export default function Form ({children, ...restProps}) {


    return (
        <Container> 
            {children} 
        </Container>
    )
}

Form.Title = function FormTitle({children, ...restProps}) {
    return <Title {...restProps}> {children} </Title>
}

Form.Email = function FormEmail({children, ...restProps}) {
    

    return <Email {...restProps} />
}

Form.Password = function FormPassword({children, ...restProps}) {

    return <Password {...restProps} />
    
}

Form.Button = function FormButton({children, ...restProps}) {

    return (
        <Button {...restProps}> 
            {children} 
        </Button>
    )
    
}

