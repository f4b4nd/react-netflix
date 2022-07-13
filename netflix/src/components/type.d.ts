/**FORM */
interface RestProps {
    [key: string]: string
}
interface IFormBase {
    children?: React.ReactNode
    onSubmit?: any
    method?: any
}

interface IFormInput {
    children?: React.ReactNode
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    value?: string
    type?: string
    autoComplete?: string
}

interface IFormSubmit {
    children?: React.ReactNode
    disabled: boolean
    type: string
    'data-testid': string
}

interface IFormLink {
    children?: React.ReactNode
    to: string
}