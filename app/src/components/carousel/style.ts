import styled from 'styled-components'

interface IArrowContainer {
    isLeftArrow?: boolean
}

export const Container = styled.div`
  position: relative;
  height: 400px;
  padding: 0 56px;
`

export const Inner = styled.div`
  overflow: hidden;
  height: 100%;
  scroll-behavior: smooth;
  padding: 20px 20px;
`

export const Gallery = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  width: fit-content;
  column-gap: 20px;
`

export const ArrowContainer = styled.div<IArrowContainer>`
  height: 35px;
  width: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  cursor: pointer;

  ${({isLeftArrow}) => isLeftArrow ? `
    
    left: 10px;

    img {
        transform: rotate(180deg);
    }

  ` : `
    right: 10px;
  `
  }

`

export const Arrow = styled.img`
  height: 100%;
  width: 100%;
`