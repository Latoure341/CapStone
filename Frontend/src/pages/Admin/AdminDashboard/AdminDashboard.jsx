import React, { useContext } from "react";
import { HotelLocationContext } from "../../../context/HotelLocationContext.jsx";
import Logo from "../../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import {
  NavContainer,
  SearchContainer,
  NavSecondContainer,
  SearchSecondContainer,
  MenuAccount,
  ElementStyle,
  LogoWrapper,
} from "../../../components/NavBar/NavBar.styled.js";
import { ListingButton, ImageWrapper, DetailsWrapper } from "../../Listing/Listing.styled.js";
import { ListingButtonsContainer, PlaceWrapper } from "./AdminDashboard.styled.js";

const AdminDashboard = () => {

    const { hotelLocation } = useContext(HotelLocationContext);
  return (
    <>
      <NavContainer listing>
        <LogoWrapper>
          <Logo className="logo" />
        </LogoWrapper>

        <NavSecondContainer>
          <p onClick={() => console.log("Become a host clicked")}>Admin Name</p>
          <MenuAccount>
            <IoIosMenu />
            <MdAccountCircle />
          </MenuAccount>
        </NavSecondContainer>
      </NavContainer>

      <ListingButtonsContainer>
        <ListingButton>View Reservation</ListingButton>
        <ListingButton>View Listings</ListingButton>
        <ListingButton>Create Listings</ListingButton>
      </ListingButtonsContainer>
      <div>
        <h4>My Hotel List</h4>
        <div>
          <PlaceWrapper>
            <span>
              <ImageWrapper>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc92YDBhnHGuBdtpQ3ThMYSUsz8lCePnq0iA&s"
                  alt="Hotel image"
                />
              </ImageWrapper>
              <button>1</button>
              <button>2</button>
            </span>
            <DetailsWrapper>
              <span>
                <p className="location">
                  Entire Home in{" "}
                  {hotelLocation === "All Locations"
                    ? "several places"
                    : hotelLocation}
                </p>
                <h1>Name of the place</h1>
              </span>
              <span>
                <p className="details">
                  4 guests · 2 bedrooms · 2 beds · 2 baths
                </p>
                <p className="details">Wifi ‣ Kitchen ‣ Free Parking</p>
              </span>
              <span>
                <p>5.0 ⭐ (100 reviews)</p>
              </span>
            </DetailsWrapper>
          </PlaceWrapper>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
