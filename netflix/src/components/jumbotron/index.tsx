import { Container, Item, Inner, Pane, Title, SubTitle, Image  } from "./style"

export default function Jumbotron ({children, flexDirection = 'column', ...restProps}: IJumbotron) {
    return (
        <Item {...restProps} >
            <Inner flexDirection={flexDirection}> 
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}: IChildren) {
    return (
        <Container {...restProps}> {children} </Container>
    )
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}: IChildren) {
    return (
        <Pane {...restProps}> {children} </Pane>
    )
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}: IChildren) {
    return (
        <Title {...restProps}> {children} </Title>
    )
}

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}: IChildren) {
    return (
        <SubTitle {...restProps}> {children} </SubTitle>
    )
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
    return (
        <Image {...restProps} />
    )
}