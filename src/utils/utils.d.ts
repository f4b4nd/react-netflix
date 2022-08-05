interface IselectionFilter {
    series: TMovie[],
    films: TMovie[],
}

interface IhandleClickOnLikeButton {
    (item: TMovieAPI, itemIsLiked: boolean, dispatch: React.Dispatch<IwishListAction>)
}