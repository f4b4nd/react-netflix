import { Container, Title, List, Item, Picture, Name } from './style'

export default function Profiles({ children, ...restProps }: IChildren) {
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }: IChildren) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }: IChildren) {
    return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }: IProfilesUser) {
    return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }: IProfilesPicture) {
    return (
        <Picture 
            {...restProps} 
            src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} 
        />
    )
}

Profiles.Name = function ProfilesName({ children, ...restProps }: IChildren) {
    return <Name {...restProps}>{children}</Name>
}