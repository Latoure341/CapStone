import React, { useContext } from "react";
import { PlaceWrapper, ImageWrapper, DetailsWrapper } from "./ViewListing.styled.js";
import { HotelLocationContext } from "../../../context/HotelLocationContext.jsx";

const ViewListing = () => {
  const { hotelLocation } = useContext(HotelLocationContext);

  return (
    <>
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
    </>
  );
};

export default ViewListing;
