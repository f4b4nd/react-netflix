import { createContext, useReducer } from 'react'

import { 
    setMovieToLocalStorage, 
    removeMovieFromLocalStorage, 
    getWishListFromLocalStorage 
} from '../utils/localStorage'

export const WishListContext = createContext<IWishListContext>({
    state: [],
    dispatch: {},
})

export const WishListContextProvider = ({children}: IChildren) => {

    const initialState = getWishListFromLocalStorage()

    const [state, dispatch] = useReducer(wishListReducer, initialState)

    return (
        <WishListContext.Provider value={{ state, dispatch }}>
            {children}
        </WishListContext.Provider>
    )

}

export const wishListReducer: IwishListReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_TO_WISHLIST':
            const wishlistHasMovie = state.filter(movie => movie.id === action.payload.id).length > 0
            if (wishlistHasMovie) {
                return state
            }
            
            setMovieToLocalStorage(action.payload)
            return  [...state, action.payload]

        case 'REMOVE_FROM_WISHLIST':
            removeMovieFromLocalStorage(action.payload)
            const filteredMovies = state.filter(movie => movie.id !== action.payload.id)
            return filteredMovies

        default:
            return state
        
    }

}
