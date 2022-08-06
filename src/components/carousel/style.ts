import styled from 'styled-components'

interface IArrowContainer {
    isLeft?: boolean
}

export const Container = styled.div`
  position: relative;
  height: 300px;
`

export const Inner = styled.div`
  overflow-x: scroll;
  overflow-y: clip;
  height: 100%;

`

export const Gallery = styled.div`
  display: flex;
  height: 100%;
  width: 100500px;
  column-gap: 20px;
  padding: 0 50px;
  border: 1px solid red;
`

export const ArrowContainer = styled.div<IArrowContainer>`
  height: 35px;
  width: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  cursor: pointer;

  ${({isLeft}) => isLeft ? `
    
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