import styled from "styled-components";
import { media } from "../../styles/theme";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0;
  font-weight: 600;
  gap: 0.75rem;
  box-shadow: ${({ conditionalstyle }) =>
    conditionalstyle ? "0px 2px 10px rgb(0, 0, 0, 0.1)" : ""};

  ${media.laptop} {
    padding: 0 0.75rem;
  }

  ${media.tablet} {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem 0.75rem;
  }

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const LogoWrapper = styled.svg`
  padding: 0;
  margin: 0;
  height: 65px;
  rect {
    fill: transparent;
  }
  cursor: pointer;

  ${media.mobile} {
    height: 50px;
  }
`;

export const NavSecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;

  ${media.tablet} {
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  ${media.mobile} {
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .login {
    position: absolute;
    top: 5.5%;
    right: 1%;

    cursor: pointer;
    background-color: white;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: ${({ admin }) => (admin ? "0.5rem" : "1rem")};

    ${media.mobile} {
      position: static;
      top: auto;
      right: auto;
      font-size: 0.9rem;
    }
  }
`;

export const MenuAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  background-color: white;
  color: black;
  font-size: 1.4rem;
  padding: 0.3rem 0.8rem;
  border-radius: 10px;

  ${media.mobile} {
    padding: 0.25rem 0.6rem;
    font-size: 1.2rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  ${media.tablet} {
    padding: 0.75rem;
  }

  ${media.mobile} {
    padding: 0.75rem 0.5rem;
  }
`;

export const SearchSecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ listing }) => (listing ? "0.5rem" : "2rem")};
  padding: 0.5rem 1rem;

  background: white;
  color: black;
  border-radius: 25px;
  box-shadow: ${({ listing }) =>
    listing ? "0 3px 3px rgba(0, 0, 0, 0.1)" : " "};
  flex-wrap: wrap;

  ${media.laptop} {
    gap: ${({ listing }) => (listing ? "0.3rem" : "1rem")};
  }

  ${media.tablet} {
    gap: 0.5rem;
    padding: 0.6rem 0.8rem;
  }

  ${media.mobile} {
  gap: 0.1rem;
    padding: 0.5rem;
  widht: 100%;
  }

  span {
    background-color: rgb(222, 49, 81);
    color: white;
    font-weight: 900;
    border-radius: 49%;
    text-align: center;
    padding: 0.3rem 0.5rem;
  }
  div {
    padding: 0.2rem 0.2rem;

    ${media.mobile} {
    padding: 0;
      width: 80%;
    }
  }

  p {
    font-size: 0.8rem;
    color: gray;
    padding: 0;
    margin: 0.1rem 0;
    cursor: pointer;
    ${media.mobile} {
      font-size: 0.5rem;
    }
  }
  h6 {
    padding: 0;
    margin: 0;
  }
  select {
    border: none;
    outline: none;
    font-size: 0.8rem;
  }

  option {
    border: none;
    outline: none;
    font-size: 0.8rem;
  }
  option:hover {
    background-color: lightgray;
  }
`;

export const ElementStyle = styled.p`
  font-weight: 500;

  ${media.tablet} {
    font-size: 0.95rem;
  }

  ${media.mobile} {
    display: none;
  }

  &:hover {
    text-decoration: underline solid white 0.2em;
    text-underline-offset: 8px;
  }
`;
