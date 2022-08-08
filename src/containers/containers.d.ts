/**BROWSER */

interface IBrowseHeaderContainer {
    category: Tcategory,
    setCategory: React.Dispatch<React.SetStateAction<Tcategory>>,
    slides: TslidesAPI,
    setSlideRows: React.Dispatch<React.SetStateAction<TslideRowAPI[]>>,
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
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}
