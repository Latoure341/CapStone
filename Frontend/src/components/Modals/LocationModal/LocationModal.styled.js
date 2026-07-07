import styled from "styled-components";
import { media } from "../../../styles/theme.js";

export const LocationModalContainer = styled.div`
  position: absolute;
  top: 32%;
  left: 33%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  ${media.mobile} {
    top: 46%;
    left: 25%;
  }
    ${media.tablet} {
    top: 44%;
    left: 30%;
  }
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
