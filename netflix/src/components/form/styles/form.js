import styled from 'styled-components'

export const Container = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 300px;
    min-height: 400px;
    border: 1px solid white;
    border-radius: 10px;
`


export const Title = styled.h1``

export const Email = styled.input``

export const Password = styled.input``

export const Button = styled.button`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #f40612;
    }
    
    &:disabled {
        background-color: grey;
        pointer-events: none;
    }
`
