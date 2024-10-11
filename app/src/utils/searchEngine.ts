export const getFilteredSlideRow = (slideRow: TSlideRowAPI, searchterm: string) => {

    const results: TSlideRowAPI['data'] = []

    slideRow.data.forEach(item => {
        if (itemMatches(item, searchterm)) {
            results.push(item)
        }
    })

    const filteredSlideRow = {...slideRow, data: results}

    return filteredSlideRow

}

const itemMatches = (item: TMovieAPI, searchterm: string) => {
    const searchtermLowerCase = searchterm.toLocaleLowerCase()
    const titleMatches = item.title?.toLocaleLowerCase().includes(searchtermLowerCase)
    const descriptionMatches = item.overview?.toLocaleLowerCase().includes(searchtermLowerCase)
    //const genreMatches = item.genre?.toLocaleLowerCase().includes(searchtermLowerCase)
    return titleMatches || descriptionMatches //|| genreMatches
}
