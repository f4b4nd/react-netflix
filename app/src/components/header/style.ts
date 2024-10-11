import styled from 'styled-components/macro'
import { Link as ReachRouterLink } from 'react-router-dom'

interface IBackground extends IChildren {
  dontShowOnSmallViewPort?: boolean
  src?: string
}

interface ILink {
  active?: boolean
}

interface ISearchInput {
  active: boolean
}

interface IPicture {
  src: string
}

interface IText {
  cursor?: string
}

export const Background = styled.div<IBackground>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => src}) top left / cover
    no-repeat;
  height: fit-content;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding-bottom: 1em;
    height: fit-content;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`

export const Link = styled.p<ILink>`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-size: 1.8em;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  text-shadow: 1px 1px 10px black;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;

  @media (max-width: 700px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const SearchInput = styled.input<ISearchInput>`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`

export const ButtonLink = styled(ReachRouterLink)<HeaderButtonLinkProps>`
  display: flex;
  justify-content: center;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`

export const Button = styled.div`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 8px 17px;
  border-radius: 5px;
  height: fit-content;

  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`

export const Picture = styled.button<IPicture>`
  background: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link} {
      cursor: pointer;
    }

    ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`

export const Feature = styled(Container)`
  margin: 100px;
  flex-direction: column;
  align-items: normal;
  width: 55%;
  height: fit-content;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`

export const Text = styled.p<IText>`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  ${({cursor}) => (cursor ? `cursor: ${cursor};` : "")};
`

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  flex-basis: 80%;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`
