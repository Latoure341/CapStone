import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  color: black;
  padding: 3rem 2rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 0 0 3rem 0;
  border-bottom: 1px solid rgb(204, 204, 204);
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  align-items: start;
  justify-content: start;

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
  }
  span {
    color: rgb(102, 102, 102);
    font-size: 1rem;
  }
`;
export const CopyrightDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem 0;
  color: rgb(102, 102, 102);
  font-size: 1rem;
`;
