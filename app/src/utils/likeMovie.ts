export const handleClickOnLikeButton: IhandleClickOnLikeButton = (item, itemIsLiked, dispatch) => {
    
    if (!itemIsLiked) {
        dispatch({type: 'ADD_TO_WISHLIST', payload: item})
        return
    }

    dispatch({type: 'REMOVE_FROM_WISHLIST', payload: item})

}
