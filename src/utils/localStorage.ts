export const getWishListFromLocalStorage = (): TslideRowMovie[] => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items = JSON.parse(itemsAsString)

    return items

}

export const setMovieToLocalStorage = (item: TslideRowMovie) => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items = JSON.parse(itemsAsString)

    localStorage.setItem("movies", JSON.stringify([...items, item]))

}

export const removeMovieFromLocalStorage = (item: TslideRowMovie) => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items: TslideRowMovie[] = JSON.parse(itemsAsString)

    const filteredItems = items.filter(movie => movie.id !== item.id)

    localStorage.setItem("movies", JSON.stringify(filteredItems))

}