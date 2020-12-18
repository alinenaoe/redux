import styled from 'styled-components';

export const AppContainer = styled.main`
    margin: 0 auto;
    padding: 40px 100px;
    max-width: 900px;
`

export const PageTitle = styled.h1`
    font-size: 2rem;
`

export const ProductContainer = styled.article`
    background-color: #ececec;
    margin: 30px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
`

export const ProductTitle = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 20px;
`

export const BuyProduct = styled.button`
    border-radius: 5px;
    width: 100px;
    transition: background-color .3s;
    margin-top: 30px;

    &:hover {
        background: #fcead0;
    }
`