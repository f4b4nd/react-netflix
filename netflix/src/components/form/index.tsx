
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './style'

export default function Form({ children, ...restProps }: IChildren) {
    return <Container {...restProps}>{children}</Container>
}

Form.Error = function FormError({ children, ...restProps }: IChildren) {
    return <Error {...restProps}>{children}</Error>
}

Form.Base = function FormBase({ children, ...restProps }: IFormBase) {
    return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({ children, ...restProps }: IChildren) {
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({ children, ...restProps }: IChildren) {
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }: IChildren) {
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({ children, ...restProps }: IFormLink) {
    return <Link {...restProps}>{children}</Link>
}

Form.Input = function FormInput({ children, ...restProps }: IFormInput) {
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormSubmit({ children, ...restProps }: IFormSubmit) {
    return <Submit {...restProps}>{children}</Submit>
}