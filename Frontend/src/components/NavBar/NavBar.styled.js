import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0 0.5rem;
  font-weight: 600;

  .logo {
    background-color: black;
    color: white;
  }
`;

export const NavSecondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
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
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  margin: 1rem auto;
`;

export const SearchSecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  background: white;
  color: black;
  border-radius: 15px;

  span {
    background-color: pink;
    color: white;
    font-weight: 700;
    border-radius: 50%;
    text-align: center;
  }
`;

export const ElementStyle = styled.p`
  font-weight: 500;
  &:hover {
    text-decoration: underline solid white 0.2em;
    text-underline-offset: 8px;
  }
`;
