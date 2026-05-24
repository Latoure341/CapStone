import styled from 'styled-components';

export const CardContainer = styled.div`
    padding: 1rem 2rem;
`

export const CardSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    justify-content: center;
`

export const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
`

export const CardSubWrapper = styled.span`
    width: 300px;
    height: 45vh;
    padding: 0;
    background-color: #b94141;
    border-radius: 10px;

    img {
        width: 100%;
        height: 200px;
        border-radius: 5px;
        margin: 0;
        object-fit: contain;
    }
    span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        color: white;
        padding: 0.2rem 1rem;
    }
    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 1rem 0 0 0;
        padding: 0;
    }
    p {
        padding: 0.1rem;
        margin: 0 0 1rem 0;
    }
`