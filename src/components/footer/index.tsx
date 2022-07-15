import { Container, Row, Column, Link, Title, Text, Break } from "./style"

export default function Footer ({children, ...restProps}: IChildren)  {
    return (
        <Container {...restProps}> {children} </Container>
    )
}
  
Footer.Row = function FooterRow({ children, ...restProps }: IChildren) {
    return <Row {...restProps}> {children} </Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }: IChildren) {
    return <Column {...restProps}> {children} </Column>
}

Footer.Link = function FooterLink({ children, ...restProps }: IFooterLink) {
    return <Link {...restProps}> {children} </Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }: IChildren) {
    return <Title {...restProps}> {children} </Title>
}

Footer.Text = function FooterText({ children, ...restProps }: IChildren) {
    return <Text {...restProps}> {children}</Text>
}

Footer.Break = function FooterBreak({ ...restProps }: IChildren) {
    return <Break {...restProps} />
}