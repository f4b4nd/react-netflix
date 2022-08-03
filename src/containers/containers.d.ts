/**BROWSER */

interface IBrowseHeaderContainer {
    category: Tcategory,
    setCategory: React.Dispatch<React.SetStateAction<Tcategory>>,
    slides: Tslides,
    setSlideRows: React.Dispatch<React.SetStateAction<TslideRows>>,
    profile: Tprofile,
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
    setProfile: React.Dispatch<React.SetStateAction<Tprofile>>
}
