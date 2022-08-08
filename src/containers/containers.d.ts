/**BROWSER */

interface IBrowseHeaderContainer {
    category: Tcategory,
    setCategory: React.Dispatch<React.SetStateAction<Tcategory>>,
    slides: TslidesAPI,
    setSlideRows: React.Dispatch<React.SetStateAction<TslideRowAPI[]>>,
    profile: Tprofile,
    setProfile: React.Dispatch<React.SetStateAction<Tprofile>>,
    displayWishList: boolean,
    setDisplayWishList: React.Dispatch<React.SetStateAction<boolean>>,

}

interface IBrowserContainer {
    slides: TslidesAPI,
}

interface IBrowseMediaContentContainer {
    category: Tcategory,
    slideRows: TslideRowAPI[],
}

/** PROFILE */
interface ISelectProfileContainer {
    user: IUser,
    setProfile: React.Dispatch<React.SetStateAction<Tprofile>>
}
