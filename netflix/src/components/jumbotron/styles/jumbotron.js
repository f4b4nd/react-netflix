import styled from 'styled-components'

export const Inner = styled.div`
    display: flex;
    flex-direction: ${ ({direction}) => direction };
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;

    @media (max-width: 1000px){
        flex-direction: column;
    }


`

export const Container = styled.div`
`