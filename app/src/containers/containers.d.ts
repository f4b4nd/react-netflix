/**BROWSER */

interface BrowseHeaderContainerProps {
    category: TCategory,
    setCategory: React.Dispatch<React.SetStateAction<TCategory>>,
    slides: TSlidesAPI,
    setSlideRows: React.Dispatch<React.SetStateAction<TSlideRowAPI[]>>,
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
interface SelectProfileContainerProps {
    user: TUsers,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}
