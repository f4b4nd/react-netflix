export const getWishListFromLocalStorage = (): TMovieAPI[] => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items = JSON.parse(itemsAsString)

    return items

}

export const seTMovieToLocalStorage = (item: TMovieAPI) => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items = JSON.parse(itemsAsString)

    localStorage.setItem("movies", JSON.stringify([...items, item]))

}

export const removeMovieFromLocalStorage = (item: TMovieAPI) => {

    const itemsAsString: string = localStorage.getItem("movies") || "[]"

    const items: TMovieAPI[] = JSON.parse(itemsAsString)

    const filteredItems = items.filter(movie => movie.id !== item.id)

    localStorage.setItem("movies", JSON.stringify(filteredItems))

}