import styled from "styled-components";
import { media } from "../../styles/theme";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  color: black;
  padding: 3rem 2rem;

  ${media.tablet} {
    padding: 2rem 1rem;
  }

  ${media.mobile} {
    padding: 1.5rem 0.75rem;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;

  padding: ${({ copywright }) => (copywright ? "0" : "0 0 3rem 0")};
  border-bottom: ${({ copywright }) => (copywright ? "none" : "1px solid rgb(204, 204, 204)")};

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ copywright }) => (copywright ? "0" : "0 0 1.5rem 0")};
  }
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

  ${media.mobile} {
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.5rem;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
