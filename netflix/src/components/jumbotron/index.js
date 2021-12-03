import { Container, Inner } from "./styles/jumbotron"

export default function Jumbotron ({children, direction = 'column', ...restProps}) {
    return (
        <Inner direction={direction} >
            {children}
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return (
        <Container {...restProps}> {children} </Container>
    )
}
