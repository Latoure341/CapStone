import React, { useContext } from "react";
import { HotelLocationContext } from "../../context/HotelLocationContext.jsx";
import Logo from "../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiGlobe, CiSearch } from "react-icons/ci";
import {
  NavContainer, SearchContainer,
  NavSecondContainer, SearchSecondContainer,
  MenuAccount,
  ElementStyle,
  LogoWrapper,
} from "../../components/NavBar/NavBar.styled.js";

const Listing = () => {
  const { hotelLocation } = useContext(HotelLocationContext);

  return (
    <div>
      <NavContainer listing>
        <LogoWrapper >
          <Logo className="logo" />
        </LogoWrapper>
        <NavSecondContainer>
         <SearchContainer listing>
                 <SearchSecondContainer listing>
                   <div>
                     <select>
                      <option>{hotelLocation}</option>
                      <option>Cape Town</option>
                      <option>Johannesburg</option>
                      <option>Sandton</option>
                      <option>Alberton</option>
                     </select>
                   </div>
                   <div>|</div>
                   <div>
                     <p>Add dates</p>
                   </div>
                   <div>|</div>
                   <div>
                     
                     <p>Add guests</p>
                   </div>
                   <div>|</div>
                   <span>
                     <CiSearch />
                   </span>
                 </SearchSecondContainer>
               </SearchContainer>
        </NavSecondContainer>
        <NavSecondContainer>
          <p onClick={() => console.log("Become a host clicked")}>
            Become a host
          </p>
          <CiGlobe />
          <MenuAccount>
            <IoIosMenu />
            <MdAccountCircle />
          </MenuAccount>
        </NavSecondContainer>
      </NavContainer>

      <h1>Listing</h1>
      <p>Location: {hotelLocation}</p>
    </div>
  );
};

export default Listing;
