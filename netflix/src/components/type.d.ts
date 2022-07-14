/**FORM */

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
    type: "button" | "reset" | "submit" | undefined
    'data-testid': string
}

interface IFormLink extends IChildren {
    to: string
}

/*** FOOTER */

interface IFooterLink extends IChildren {
    href: string
}

/** LOADING */

interface ILoading {
    src: string | null
}

/** PROFILES */

interface IProfilesPicture {
    src: string | null
}

interface IProfilesUser extends IChildren {
    onClick?: () => void
    'data-testid': string,
}