import React, { useState, useContext } from "react";
import Logo from "../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiGlobe, CiSearch } from "react-icons/ci";

import { HotelLocationContext } from "../../context/HotelLocationContext.jsx";
import {
  NavContainer,
  NavSecondContainer,
  MenuAccount,
  SearchContainer,
  ElementStyle,
  SearchSecondContainer,
} from "./NavBar.styled.js";

const NavBar = () => {
  const { hotelModal, setHotelModal} = useContext(HotelLocationContext);
  const handleHotelSelect = () => {
    setHotelModal(!hotelModal);
    console.log(hotelModal);
  }

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
          <p onClick={() => console.log("Become a host clicked")}>Become a host</p>
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
            <h6>Hotels</h6>
            <p onClick={() => handleHotelSelect()}>Select Hotels</p>
          </div>
          <div>|</div>
          <div>
            <h6>Check ins</h6>
            <p onClick={() => console.log("Check-in dates added")}>Add dates</p>
          </div>
          <div>|</div>
          <div>
            <h6>Check Out</h6>
            <p onClick={() => console.log("Check-out dates added")}>Add dates</p>
          </div>
          <div>|</div>
          <span>
            <CiSearch />
          </span>
        </SearchSecondContainer>
      </SearchContainer>
    </>
  );
};

export default NavBar;
