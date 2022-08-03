import { useState } from 'react'

import { Link as ReachRouterLink } from 'react-router-dom'

import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  Button,
  Text,
  Feature,
  Logo,
} from './style'

export default function Header({ bg = true, children, ...restProps }: IHeader) {
  return (
    <>

      {bg &&
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
      }

      {!bg && <> {children} </> }

    </>
  )
}

Header.Frame = function HeaderFrame({ children, ...restProps }: IChildren) {
  return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }: IChildren) {
  return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, src, ...restProps }: IHeaderLogo) {
  return (
    <ReachRouterLink to={to}>
      <Logo src={src} {...restProps} />
    </ReachRouterLink>
  )
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }: IHeaderSearch) {
  
  const [searchActive, setSearchActive] = useState<boolean>(false)

  return (
    <Search {...restProps}>

      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>

      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  )
}

Header.Profile = function HeaderProfile({ children, ...restProps }: IChildren) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Feature = function HeaderFeature({ children, ...restProps }: IChildren) {
  return <Feature>{children}</Feature>
}

Header.Picture = function HeaderPicture({ src, ...restProps }: IHeaderPicture) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }: IChildren) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }: IHeaderTextLink) {
  return <Link {...restProps}>{children}</Link>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }: IChildren) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...restProps }: IHeaderText) {
  return <Text {...restProps}>{children}</Text>
}

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }: IHeaderButtonLink) {
  return <ButtonLink to={to} {...restProps}>{children}</ButtonLink>
}

Header.Button = function HeaderButton({ children, ...restProps }: IHeaderButton) {
  return <Button {...restProps}>{children}</Button>
}
