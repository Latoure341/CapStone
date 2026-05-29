import styled from "styled-components";

export const LocationModalContainer = styled.div`
    position: absolute;
    top: 33%;
    left: 33%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;

    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 100;

    span {
        cursor: pointer;
        font-size: 0.7rem;
        font-weight: 600;
    }
`;