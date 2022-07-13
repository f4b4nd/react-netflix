

/**BROWSER */
interface IBrowseHeaderContainer {
    user: IUser
    category: Tcategory,
    setCategory: React.Dispatch<Tcategory>,
    slides: Tslides,
    setSlideRows: React.Dispatch<TslideRows>,
    slideRows: TslideRows,
}

interface IBrowserContainer {
    slides: Tslides,
}

interface IBrowseMediaContentContainer {
    category: Tcategory,
    slideRows: TslideRows,
}

/** PROFILE */
interface ISelectProfileContainer {
    user: IUser,
    setProfile: React.Dispatch<IUser>
}
