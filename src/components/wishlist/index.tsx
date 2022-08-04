import { Container, Title, Grid} from "./style";

export default function Wishlist ({children}: IChildren) {
    return (
        <Container>
            {children}
        </Container>
    )
}

Wishlist.Title = function WishlistTitle ({children}: IChildren) {
    return <Title> {children} </Title>
}

Wishlist.Grid = function WishlistGrid ({children}: IChildren) {
    return <Grid> {children} </Grid>
}