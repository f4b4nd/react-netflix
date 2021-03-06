/** USER */
type IUser = import('firebase').User | null


/** SERIES + FILMS */
type TSeriesKeys = 'docId' | 'id' | 'title' | 'description' | 'genre' | 'maturity' | 'slug'

type ISeries = Partial<Record<TSeriesKeys, string>>[]

type IFilms = Partial<Record<TSeriesKeys, string>>[]


/** CONTENT */
type Tcontent = ISeries | IFilms


/** FEATURE */
type TitemFeature = {
    title?: string,
    genre?: string,
    slug?: string,
    description?: string,
    maturity?: number,
    genre?: string,
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

/** RESTPROPS */
interface RestProps {
    [key: string]: string
}

