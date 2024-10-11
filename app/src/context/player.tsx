import { createContext } from 'react'

export const PlayerContext = createContext<PlayerContextProps>({
    showPlayer: false,
    setShowPlayer: () => null,
})
