import React, { useContext } from "react";
import axios from "axios";
import { HotelLocationContext } from "../../context/HotelLocationContext.jsx";
import Logo from "../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiGlobe, CiSearch } from "react-icons/ci";
import {
  NavContainer,
  SearchContainer,
  NavSecondContainer,
  SearchSecondContainer,
  MenuAccount,
  ElementStyle,
  LogoWrapper,
} from "../../components/NavBar/NavBar.styled.js";
import { ListingContainer, FilterContainer, 
  ListingSecondContainer, ImageWrapper, 
  ListingButton, DetailsWrapper } from "./Listing.styled.js";

const Listing = () => {
  const { hotelLocation } = useContext(HotelLocationContext);
  const listingPlaces = axios.get()

  return (
    <>
      <NavContainer listing>
        <LogoWrapper>
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

      <ListingContainer>
        <p>200+ AirBnB places to stay in {hotelLocation}</p>
        <FilterContainer>
          <ListingButton>Free cancelation</ListingButton>
          <ListingButton>Type of place</ListingButton>
          <ListingButton>Price</ListingButton>
          <ListingButton>Instant Book</ListingButton>
          <ListingButton>More Filters</ListingButton>
        </FilterContainer>
      </ListingContainer>

      <ListingSecondContainer>
        <div>
          <ImageWrapper>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc92YDBhnHGuBdtpQ3ThMYSUsz8lCePnq0iA&s" 
            alt="Hotel image" />
          </ImageWrapper>
          <DetailsWrapper>
            <span>
              <p className="location">
                Entire Home in {(hotelLocation === "All Locations") ? "several places"
                  : hotelLocation}
              </p>
              <h1>Name of the place</h1>
            </span>
            <span>
              <p className="details">4 guests · 2 bedrooms · 2 beds · 2 baths</p>
              <p className="details">Wifi ‣ Kitchen ‣ Free Parking</p>
            </span>
            <span>
              <p>5.0 ⭐ (100 reviews)</p>
            </span>
          </DetailsWrapper>
        </div>
      </ListingSecondContainer>
    </>
  );
};

export default Listing;
