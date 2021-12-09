 import React from "react"
 import { render, fireEVent } from '@testing-library/react'

 import { Player } from "../../components"

 describe(<Player />, () => {
    it ('renders <Player /> with a bunny video', () => {
        const { container, getByText, queryByTestId } = render (
            <Player>
                <Player.Button />
                <Player.Video src="Videos/bunny.mp4"/>
            </Player>
        )

        expect(queryByTestId('player')).toBeFalsy()
        fireEVent.click(queryByTestId('player'))
    })

 })