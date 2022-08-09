import styled from 'styled-components'

interface IGroup {
  flexDirection?: 'row' | 'column',
  alignItems?: string,
  margin?: string,
}

interface IFeatureText {
  fontWeight?: string
}

interface IFeature {
  src?: string
}

interface IMaturity {
  isRated?: boolean
}

interface ILikeButton {
  isActive?: boolean
}

interface IItem {
  width?: string
}

export const Title = styled.h1`
  font-size: 34px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 76px;
  margin-top: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Group = styled.div<IGroup>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`

export const SubTitle = styled.p`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`

export const Text = styled.p`
  font-size: 15px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1em;
  margin: 0;
  color: #fff;
`

export const Entities = styled.div`
  margin-left: 56px;
  display: flex;
  flex-direction: row;
  gap: 1em 0.5em;
`

export const Meta = styled.div`
  display: flex;
  visibility: hidden ;
  flex-direction: column;
  justify-content: space-evenly;

  position: absolute;
  bottom: 0;
  padding: 5px 10px;
  background-color: #0000008f;
  cursor: default;
  width: 100%;
  height: 50%;
`

export const Actions = styled.div`
  display: flex;
  column-gap: 1em;
  font-size: 0.8em;
  color: white;
`

export const LikeButton = styled.div<ILikeButton>`
  height: 30px;
  width: 30px;
  cursor: pointer;

  img {
    height: 100%; 
    width: 100%;
    ${({isActive}) => `filter: brightness(${isActive ? 1.5 : 0.9 });`}

    &:hover {
      transform: scale(1.2);
    }
  }

`

export const Image = styled.img`
  border: 0;
  width: 100%;
  cursor: pointer;
  height: 100%;
  padding: 0;
  margin: 0;
`

export const Item = styled.div<IItem>`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 0.7s;
  ${({width}) => `width: ${width ?? '200px'};` }
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta} {
      visibility: visible;
      z-index: 100;
    }
  }

`

export const FeatureText = styled.p<IFeatureText>`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;
  padding: 0;
  max-height: 200px;
  text-transform: capitalize;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`

export const Feature = styled.div<IFeature>`
  position: relative;
  height: 360px;
  margin: 0 56px;

  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: 40% 100%;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`

export const Maturity = styled.div<IMaturity>`
  background-color: ${({ isRated }) => (isRated ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 12px;
`

