interface IselectionFilter {
    series: TMovie[],
    films: TMovie[],
}

interface IhandleClickOnLikeButton {
    (item: TMovie, itemIsLiked: boolean, dispatch: React.Dispatch<IwishListAction>)
}