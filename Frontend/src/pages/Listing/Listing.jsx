import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HotelLocationContext } from "../../context/HotelLocationContext.jsx";
import { NavBarContext } from "../../context/NavBarContext.jsx";
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
import {
  ListingContainer,
  FilterContainer,
  ListingSecondContainer,
  ImageWrapper,
  ListingButton,
  DetailsWrapper,
} from "./Listing.styled.js";

const Listing = () => {
  const { hotelLocation, setHotelLocation } = useContext(HotelLocationContext);
  const { setPreviewNavBar } = useContext(NavBarContext);
  const location = hotelLocation == "" ? "All Locations" : hotelLocation;
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Retrieve data from Backend
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/listings/", {
          method: "GET",
          "Content-type": "application/json",
        });

        if (!response.ok) {
          throw new Error("Failed to retrieve listings");
        }

        const data = await response.json();
        setListings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  // Filter listings based on selected location
  useEffect(() => {
    if (hotelLocation === "" || hotelLocation === "All Locations") {
      setFilteredListings(listings);
    } else {
      const filtered = listings.filter(
        (listing) => listing.location === hotelLocation,
      );
      setFilteredListings(filtered);
    }
  }, [listings, hotelLocation]);

  if (loading) {
    return <h4>Loading listings...</h4>;
  }

  if (error) {
    return <h4>Error: {error}</h4>;
  }

  return (
    <>
      <NavContainer listing="true">
        <LogoWrapper
          onClick={() => {
            setPreviewNavBar(false);
            navigate("/");
          }}
        >
          <Logo className="logo" />
        </LogoWrapper>
        <NavSecondContainer>
          <SearchContainer listing="true">
            <SearchSecondContainer listing="true">
              <div>
                <select
                  onChange={(e) =>
                    setHotelLocation(
                      e.target.value === "All Locations" ? "" : e.target.value,
                    )
                  }
                >
                  <option>{location}</option>
                  <option>Cape Town</option>
                  <option>Johannesburg</option>
                  <option>Sandton</option>
                  <option>Alberton</option>
                  <option>All Locations</option>
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
        <p>200+ AirBnB places to stay in {location}</p>
        <FilterContainer>
          <ListingButton>Free cancelation</ListingButton>
          <ListingButton>Type of place</ListingButton>
          <ListingButton>Price</ListingButton>
          <ListingButton>Instant Book</ListingButton>
          <ListingButton>More Filters</ListingButton>
        </FilterContainer>
      </ListingContainer>

      <ListingSecondContainer>
        {filteredListings.length > 0 ? (
          filteredListings.map((itemListing) => {
            const imageBuffer = itemListing.images[0].data;
            return (
              <div
                key={itemListing._id}
                onClick={(e) => {
                  setPreviewNavBar(false);
                  localStorage.setItem("itemListing", JSON.stringify(itemListing))
                  navigate("/preview");
                }}
              >
                <ImageWrapper>
                  <img
                    src={`data:image/jpeg;base64,${imageBuffer}`}
                    alt="Hotel image"
                  />
                </ImageWrapper>
                <DetailsWrapper>
                  <span>
                    <p className="location">
                      Entire Home in
                      {hotelLocation === "All Locations"
                        ? "several places"
                        : " " + hotelLocation}
                    </p>
                    <h1>{itemListing.listName}</h1>
                  </span>
                  <span>
                    <p className="details">
                      {itemListing.guests || 4} guests ·{" "}
                      {itemListing.bedrooms || 2} bedrooms ·{" "}
                      {itemListing.beds || 2} beds · {itemListing.baths || 2}{" "}
                      baths
                    </p>
                    <p className="details">
                      {itemListing.amenities || "Wifi ‣ Kitchen ‣ Free Parking"}
                    </p>
                  </span>
                  <span>
                    <p>
                      {itemListing.rating || 5.0} ⭐ (
                      {itemListing.reviews || 100} reviews)
                    </p>
                  </span>
                </DetailsWrapper>
              </div>
            );
          })
        ) : (
          <p>No place in the location</p>
        )}
      </ListingSecondContainer>
    </>
  );
};

export default Listing;
