import { createContext } from "react"

export const ToggleContext = createContext<IToggleContext>({
    toggleShow: false, 
    setToggleShow: () => null,
})
