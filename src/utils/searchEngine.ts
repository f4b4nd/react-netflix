export const getFilteredSlideRow = (slideRow: TslideRow, searchterm: string) => {

    const results: TslideRow['data'] = []

    slideRow.data.forEach(item => {
        if (itemMatches(item, searchterm)) {
            results.push(item)
        }
    })

    const filteredSlideRow = {...slideRow, data: results}

    return filteredSlideRow

}

const itemMatches = (item: TslideRowMovie, searchterm: string) => {
    const searchtermLowerCase = searchterm.toLocaleLowerCase()
    const titleMatches = item.title.toLocaleLowerCase().includes(searchtermLowerCase)
    const descriptionMatches = item.description.toLocaleLowerCase().includes(searchtermLowerCase)
    const genreMatches = item.genre.toLocaleLowerCase().includes(searchtermLowerCase)
    return titleMatches || descriptionMatches || genreMatches
}
