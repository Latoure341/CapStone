import styled from "styled-components";

export const LocationModalContainer = styled.div`
    position: absolute;
    top: 32%;
    left: 37%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;

    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;

    span {
        width: 100%;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 0.7rem;
        font-weight: 600;
    }
        span:hover {
            background-color: rgb(223, 223, 223);
        }
`;