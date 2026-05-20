import React from "react";
import {
  NavContainer,
  NavSecondContainer,
  MenuAccount,
  SearchContainer,
} from "./NavBar.styled.js";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <span>Logo</span>
        <NavSecondContainer>
          <p>Places to stay</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </NavSecondContainer>
        <NavSecondContainer>
          <p>Become a host</p>
          <MenuAccount>
            <p>Menu</p>
            <p>Account</p>
          </MenuAccount>
        </NavSecondContainer>
      </NavContainer>
      <SearchContainer>SearchBars and all that</SearchContainer>
    </>
  );
};

export default NavBar;
