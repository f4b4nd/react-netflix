import { createContext } from "react"

export const FeatureContext = createContext<FeatureContextProps>({
    showFeature: false,
    setShowFeature: () => null,
    itemFeature: {} as TMovieAPI,
    setItemFeature: () => null,
})
