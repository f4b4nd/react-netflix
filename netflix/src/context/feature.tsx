import { createContext } from "react"

export const FeatureContext = createContext<IFeatureContext>({
    showFeature: false,
    setShowFeature: () => null,
    itemFeature: {},
    setItemFeature: () => null,
})
