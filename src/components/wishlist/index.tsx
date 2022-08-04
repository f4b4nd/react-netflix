import { Container, Title, SubTitle, Grid} from "./style";

export default function Wishlist ({children}: IChildren) {
    return (
        <Container className="wishlist">
            {children}
        </Container>
    )
}

Wishlist.Title = function WishlistTitle ({children}: IChildren) {
    return <Title className="wishlist__title"> {children} </Title>
}

Wishlist.SubTitle = function WishlistTitle ({children}: IChildren) {
    return <SubTitle className="wishlist__subtitle"> {children} </SubTitle>
}


Wishlist.Grid = function WishlistGrid ({children}: IChildren) {
    return <Grid  className="wishlist__grid"> {children} </Grid>
}