import { createContext, useReducer } from 'react'
import useWishList from '../hooks/useWishList'
import { setMovieToLocalStorage, removeMovieFromLocalStorage } from '../utils/localStorage'

export const WishListContext = createContext<IWishListContext>({
    state: [],
    dispatch: {},
})

export const WishListContextProvider = ({children}: IChildren) => {

    const initialState = useWishList()

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
            const wishlistHasMovie = state.find(movie => movie.id === action.payload.id)
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
