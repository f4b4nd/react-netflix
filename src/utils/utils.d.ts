interface IselectionFilter {
    series: TMovie[],
    films: TMovie[],
}

interface IhandleClickOnLikeButton {
    (item: TMovie, dispatch: React.Dispatch<IwishListAction>)
}