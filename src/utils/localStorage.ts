export const getWishListFromLocalStorage = (): TMovie[] => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items = JSON.parse(itemsAsString)

    return items

}

export const setMovieToLocalStorage = (item: TMovie) => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items = JSON.parse(itemsAsString)

    localStorage.setItem("movies", JSON.stringify([...items, item]))

}

export const removeMovieFromLocalStorage = (item: TMovie) => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items: TMovie[] = JSON.parse(itemsAsString)

    const filteredItems = items.filter(movie => movie.id !== item.id)

    localStorage.setItem("movies", JSON.stringify(filteredItems))

}