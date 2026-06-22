import styled from "styled-components";

export const GuestsContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  top: 20%;
  left: 61%;
  z-index: 1000;
  box-shadow: 0 0.5px 5px rgba(222, 49, 81, 0.34);
  background-color: white;
  color: black;
  border-radius: 8px;
  border: none;

  button {
    border: none;
    border-radius: 50%;
    background-color: rgb(222, 49, 81);
    color: white;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }
`;
