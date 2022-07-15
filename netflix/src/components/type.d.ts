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

/** HEADER */

interface IHeader extends IChildren {
    bg?: boolean
    src?: string
    dontShowOnSmallViewPort?: boolean
}

interface IHeaderLogo extends RestProps {
    to: string,
    src: string,
}

interface IHeaderSearch {
    searchTerm: string,
    setSearchTerm: React.Dispatch<string>,
}

interface IHeaderPicture {
    src: string | null
}

interface IHeaderTextLink extends IChildren {
    active?: boolean
    onClick?: () => void
}

interface IHeaderButtonLink extends IChildren {
    to: string,
}

/*** JUMBOTRON */

interface IJumbotron extends IChildren {
    flexDirection: "row" | "column" | "row-reverse" | "column-reverse"
}

/** LOADING */

interface ILoading {
    src: string | null
}

/*** PLAYER */

interface IPlayerVideo {
    src: string
}

/** PROFILES */

interface IProfilesPicture {
    src: string | null
}

interface IProfilesUser extends IChildren {
    onClick?: () => void
    'data-testid': string,
}