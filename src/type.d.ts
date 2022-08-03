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

/** SLIDES ROWS*/

type TslideRow = {
    title: string,
    data: TMovie[]
}
