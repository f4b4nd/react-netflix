/**BROWSER */

interface BrowseHeaderContainerProps {
    category: TCategory,
    seTCategory: React.Dispatch<React.SetStateAction<TCategory>>,
    slides: TSlidesAPI,
    seTSlideRows: React.Dispatch<React.SetStateAction<TSlideRowAPI[]>>,
    displayWishList: boolean,
    setDisplayWishList: React.Dispatch<React.SetStateAction<boolean>>,

}

interface BrowserContainerProps {
    slides: TSlidesAPI,
}

interface BrowseMediaContentContainerProps {
    category: TCategory,
    slideRows: TSlideRowAPI[],
}

/** PROFILE */
interface SelecTProfileContainerProps {
    user: TUsers,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}
