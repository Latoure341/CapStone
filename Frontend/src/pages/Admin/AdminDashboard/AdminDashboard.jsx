import React, { useContext, useState } from "react";

import { HotelLocationContext } from "../../../context/HotelLocationContext.jsx";
import Logo from "../../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import ViewListing from "../ViewListing/ViewListing.jsx";
import ListingCreation from "../ListingCreation/ListingCreation.jsx";
import {
  NavContainer,
  SearchContainer,
  NavSecondContainer,
  SearchSecondContainer,
  MenuAccount,
  ElementStyle,
  LogoWrapper,
} from "../../../components/NavBar/NavBar.styled.js";
import { ListingButton } from "../../Listing/Listing.styled.js";
import { ListingButtonsContainer } from "./AdminDashboard.styled.js";
import ViewReservation from "../Reservation/ViewReservation.jsx";

const AdminDashboard = () => {
  const [createListing, setCreateListing] = useState(false);
  const [viewReservation, setViewReservation] = useState(false);
  const [viewListing, setViewListing] = useState(true);

  const handleViewListing = () => {
    setViewListing(true);
    setCreateListing(false);
    setViewReservation(false);
  };
  const handleCreateListing = () => {
    setViewListing(false);
    setCreateListing(true);
    setViewReservation(false);
  };
  const handleViewReservation = () => {
    setViewListing(false);
    setCreateListing(false);
    setViewReservation(true);
  };
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
        <ListingButton onClick={() => handleViewReservation()}>
          View Reservation
        </ListingButton>
        <ListingButton onClick={() => handleViewListing()}>
          View Listings
        </ListingButton>
        <ListingButton onClick={() => handleCreateListing()}>
          Create Listings
        </ListingButton>
      </ListingButtonsContainer>
      {viewListing && <ViewListing />}
      {createListing && <ListingCreation />}
      {viewReservation && <ViewReservation />}
    </>
  );
};

export default AdminDashboard;
