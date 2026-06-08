import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem;
`;

export const SecondFormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const SpanUpperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const SpanContainer = styled.span`
  display: flex;
  flex-direction: column;

  label {
    color: purple;
  }
  input,
  select {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.3rem auto;
  }
  textarea {
    border: 1px solid gray;
    border-radius: 5px;
    padding: 0.2rem;
    margin: 0.3rem auto;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: ${({ cancel }) => (cancel ? "red" : "purple")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;
