import { createContext } from "react"

export const ToggleContext = createContext<ToggleContextProps>({
    toggleShow: false, 
    setToggleShow: () => null,
})
