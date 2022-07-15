import { Container, Title, SubTitle } from './style'

export default function Feature({ children, ...restProps }: IChildren) {
    return <Container {...restProps}>{children}</Container>
}

Feature.Title = function FeatureTitle({ children, ...restProps }: IChildren) {
    return <Title {...restProps}>{children}</Title>;
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }: IChildren) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}