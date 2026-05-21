import React from "react";
import Logo from "../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiGlobe, CiSearch } from "react-icons/ci";

import {
  NavContainer,
  NavSecondContainer,
  MenuAccount,
  SearchContainer,
  ElementStyle,
  SearchSecondContainer,
} from "./NavBar.styled.js";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <span>
          <Logo className="logo" />
        </span>
        <NavSecondContainer>
          <ElementStyle>Places to stay</ElementStyle>
          <ElementStyle>Experiences</ElementStyle>
          <ElementStyle>Online Experiences</ElementStyle>
        </NavSecondContainer>
        <NavSecondContainer>
          <p>Become a host</p>
          <CiGlobe />
          <MenuAccount>
            <IoIosMenu />
            <MdAccountCircle />
          </MenuAccount>
        </NavSecondContainer>
      </NavContainer>

      <SearchContainer>
        <SearchSecondContainer>
          <div>
            <h1>Hotels</h1>
          </div>
          <div>Check ins</div>
          <div>Check Out</div>
          <span>
            <CiSearch />
          </span>
        </SearchSecondContainer>
      </SearchContainer>
    </>
  );
};

export default NavBar;
