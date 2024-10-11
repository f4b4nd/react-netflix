/** CARD */

interface CardFeatureProps extends IChildren {
}

interface CardItemProps extends IChildren {
    item: TMovieAPI,
    width?: string
}

interface CardLikeButtonProps extends IChildren  {
    src: string,
    onClick?: () => void,
    isActive?: boolean
}

/*** CAR0USEL */
interface CarouselArrowProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

/**FORM */

interface FormBaseProps {
    children?: React.ReactNode
    onSubmit?: (event: React.FormEvent) => Promise<void>
    method?: string
}

interface FormInputProps {
    children?: React.ReactNode
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    value?: string
    type?: string
    autoComplete?: string
}

interface FormSubmitProps {
    children?: React.ReactNode
    disabled: boolean
    type: "button" | "reset" | "submit" | undefined
    'data-testid': string
}

interface FormLinkProps extends IChildren {
    to: string
}

/*** FOOTER */

interface FooterLinkProps extends IChildren {
    href: string
}

/** HEADER */

interface HeaderProps extends IChildren {
    bg?: boolean
    src?: string
    dontShowOnSmallViewPort?: boolean
}

interface HeaderLogoProps extends RestProps {
    to: string,
    src: string,
}

interface HeaderSearchProps {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
}

interface HeaderPictureProps {
    src: string | null
}

interface HeaderTextProps extends IChildren {
    onClick?: () => void,
    cursor?: string,
}

interface HeaderTextLinkProps extends IChildren {
    active?: boolean
    onClick?: () => void
}

interface HeaderButtonLinkProps extends IChildren {
    to: string,
    onClick?: () => void
}

interface HeaderButtonProps extends IChildren {
    onClick?: () => void
}

/*** JUMBOTRON */

interface JumbotronProps extends IChildren {
    flexDirection: "row" | "column" | "row-reverse" | "column-reverse"
}

/** LOADING */

interface LoadingProps {
    src: string | null
}

/*** PLAYER */

interface PlayerVideoProps {
    src: string
}

interface PlayerButtonProps {
    asIcon?: boolean
}

/** PROFILES */

interface ProfilesPictureProps {
    src: string | null
}

interface ProfilesTUsers extends IChildren {
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

interface HTMLProps extends React.HTMLAttributes<HTMLDivElement>, IChildren {}
