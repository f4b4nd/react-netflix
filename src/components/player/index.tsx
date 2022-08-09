import { useState, useContext,  } from 'react'

import ReactDOM from 'react-dom'

import { Container, Button, ButtonIcon, Overlay, Inner, Close } from './style'

import { PlayerContext } from '../../context/player'

export default function Player({ children, ...restProps }: IChildren) {

    const [showPlayer, setShowPlayer] = useState<boolean>(false)

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>
                {children}
            </Container>
        </PlayerContext.Provider>
    )

}

Player.Video = function PlayerVideo({ src }: IPlayerVideo) {

    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return (
        showPlayer ? (
            ReactDOM.createPortal(
                <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
                    <Inner>
                        <video id="player" controls autoPlay>
                            <source src={src} type="video/mp4" />
                        </video>
                        <Close />
                    </Inner>
                </Overlay>,
                document.body
            )
        ) : null
    )
}

Player.Button = function PlayerButton({ asIcon, ...restProps }: IPlayerButton) {

    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return (
        <Button 
            onClick={() => setShowPlayer(!showPlayer)}
            asIcon={asIcon}
            {...restProps}
        >            
            {asIcon ? (
                <ButtonIcon src="/images/icons/play.png" alt="play"/>
                ) : (
                'Play'
            )}

        </Button>
    )
}
