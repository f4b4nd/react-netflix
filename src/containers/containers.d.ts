/**BROWSER */

interface IBrowseHeaderContainer {
    category: Tcategory,
    setCategory: React.Dispatch<React.SetStateAction<Tcategory>>,
    slides: Tslides,
    setSlideRows: React.Dispatch<React.SetStateAction<TslideRow[]>>,
    profile: Tprofile,
    displayWishList: boolean,
    setDisplayWishList: React.Dispatch<React.SetStateAction<boolean>>,

}

interface IBrowserContainer {
    slides: Tslides,
}

interface IBrowseMediaContentContainer {
    category: Tcategory,
    slideRows: TslideRow[],
}

/** PROFILE */
interface ISelectProfileContainer {
    user: IUser,
    setProfile: React.Dispatch<React.SetStateAction<Tprofile>>
}
