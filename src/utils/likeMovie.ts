export const handleClickOnLikeButton: IhandleClickOnLikeButton = (item, dispatch) => {
    console.log('item', item)
    dispatch({type: 'ADD_TO_WISHLIST', payload: item})
}

export const handleClickOnDislikeButton: IhandleClickOnLikeButton = (item, dispatch) => {
    dispatch({type: 'REMOVE_FROM_WISHLIST', payload: item})
}
