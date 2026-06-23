import styled from "styled-components";
import { media } from "../../styles/theme";

export const Container = styled.div`
  background-color: black;
  color: white;
  padding-bottom: 1rem;

  ${media.tablet} {
    padding-bottom: 0.75rem;
  }

  ${media.mobile} {
    padding-bottom: 0.5rem;
  }
`;