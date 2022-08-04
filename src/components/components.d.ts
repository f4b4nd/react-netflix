/** CARD */

interface ICardFeature extends IChildren {
    category: Tcategory
}

interface ICardItem extends IChildren {
    item: TMovie
}

interface ICardLikeButton extends IChildren {
    src: string,
    onClick?: () => void,
    isActive?: boolean
}

/**FORM */

interface IFormBase {
    children?: React.ReactNode
    onSubmit?: (event: React.FormEvent) => Promise<void>
    method?: string
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
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

interface IHeaderPicture {
    src: string | null
}

interface IHeaderText extends IChildren {
    onClick?: () => void,
    cursor?: string,
}

interface IHeaderTextLink extends IChildren {
    active?: boolean
    onClick?: () => void
}

interface IHeaderButtonLink extends IChildren {
    to: string,
    onClick?: () => void
}

interface IHeaderButton extends IChildren {
    onClick?: () => void
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

interface IPlayerButton {
    asIcon?: boolean
}

/** PROFILES */

interface IProfilesPicture {
    src: string | null
}

interface IProfilesUser extends IChildren {
    onClick?: () => void
    'data-testid': string,
}

/*** CHILDREN */
interface IChildren {
    children?: React.ReactNode
}

/** RESTPROPS */
interface RestProps extends React.HTMLAttributes<HTMLDivElement> {
    [key: string]: string
}

