import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    background-color: #ffffff;

    p {
      color: rgb(93, 105, 219);
    }
  }
  span {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  input {
    border: 1px solid #494949;
    border-radius: 4px;
    padding: 0.2rem;
    font-size: 1rem;
  }
  button {
    background-color: rgb(93, 105, 219);
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 3rem;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;
