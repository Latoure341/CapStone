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

export const CardExperienceWrapper = styled.span`
    width: 48%;
    height: 60vh;

    color: white;
    background-image: ${({ secondwrapper }) => secondwrapper ? 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlurIrdmF2Donze9YzWRYobXP-nDaSD_Ykg&s)' : 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTruikTeB5wM_ClhuWSf9-mMYX-dpHNm9kQ&s)'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    
    h2 {
        width: 50%;
        font-size: 3rem;
        font-weight: 500;
        margin: 4rem 0 0 4rem;
        padding: 0;
    }
        button {
            margin: 0.5rem 0 0 4rem;
            background-color: #fff;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
        }
`

export const GiftCardWrapper = styled.span`

`