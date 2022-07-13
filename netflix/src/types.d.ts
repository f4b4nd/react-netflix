/** USER */
type IUser = import('firebase').User | null


/** SERIES + FILMS */
type TSeriesKeys = 'id' | 'title' | 'description' | 'genre' | 'maturity' | 'slug'

type ISeries = Record<TSeriesKeys, string>[]

type IFilms = Record<TSeriesKeys, string>[]


/** CATEGORY */
type Tcategory = string

/** SLIDES */
type Tslides = {
    series: {
        title: string,
        data: Tseries,
    }[],
    films: {
        title: string,
        data: Tseries,
    }[],
}

/** SLIDES ROWS*/
type TslideRows = {
    title: string,
    data: {
        title: string,
        docId: string,
        genre: string,
        slug: string,
        description: string
    }[]
}[]

/*** CHILDREN */
interface IChildren {
    children?: React.ReactNode
}

/**FIREBASE */
interface IFirebaseContext  {
    user: IUser
}

interface IFirebaseContextProvider extends IChildren {
}
