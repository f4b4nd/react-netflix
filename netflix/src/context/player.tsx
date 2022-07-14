import { createContext } from 'react'

export const PlayerContext = createContext<IPlayerContext>({
    showPlayer: false,
    setShowPlayer: () => null,
})
