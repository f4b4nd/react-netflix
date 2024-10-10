import { Container, Input, Break, Button, Text } from './style'

export default function OptForm({ children, ...restProps }: IChildren) {
  return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }: IChildren) {
  return (
    <Button {...restProps}>
      {children} 
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  )
}

OptForm.Text = function OptFormText({ children, ...restProps }: IChildren) {
  return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />
}