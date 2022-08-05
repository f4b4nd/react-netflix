/** USER */
type IUser = import('firebase').User | null


/** MOVIE */
type TMovie = {
    id?: string,
    docId?: string,
    title?: string,
    genre?: string,
    slug?: string,
    description?: string,
    maturity?: number,
}

/** CATEGORY */
type Tcategory = string

/** PROFILE */
type Tprofile = {
    displayName: string,
    photoURL: string,
}

/** SLIDES */
type Tslides = {
    series: {
        title: string,
        data: TMovie[],
    }[],
    films: {
        title: string,
        data: TMovie[],
    }[],
}

type TslidesAPI = {
    series: {
        title: string,
        data: TMovieAPI[],
    }[],
    films: {
        title: string,
        data: TMovieAPI[],
    }[],
}

/** SLIDES ROWS*/

type TslideRow = {
    title: string,
    data: TMovie[]
}

type TslideRowAPI = {
    title: string,
    data: TMovieAPI[]
}

/** MOVIEDB API*/
type TMovieAPI = {
    id: number,
    adult: booelan,
    backdrop_path: src,
    genre_ids: number[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: float, 
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: float, 
    vote_count: number,
    name: string
}

type TResponseAPI = TMovieAPI | TMultipleMoviesAPI

type TMultipleMoviesAPI = {
    page?: number,
    results: TMovieAPI[],
    total_pages?: number,
    total_results?: number,
}