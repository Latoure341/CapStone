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
`;

export const SearchSecondContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 1rem;

  background: white;
  color: black;
  border-radius: 25px;

  span {
    background-color: rgb(222,49,81);
    color: white;
    font-weight: 900;
    border-radius: 50%;
    text-align: center;
    padding: 0.4rem 0.5rem;
  }
    div {
      padding: 0.2rem 0.2rem;
    }

  p {
    font-size: 0.8rem;
    color: gray;
    padding: 0;
    margin: 0.1rem 0;
  }
  h6 {
    padding: 0;
    margin: 0;
  }
`;

export const ElementStyle = styled.p`
  font-weight: 500;
  &:hover {
    text-decoration: underline solid white 0.2em;
    text-underline-offset: 8px;
  }
`;
