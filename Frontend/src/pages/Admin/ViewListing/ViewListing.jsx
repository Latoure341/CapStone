import React, { useContext, useState, useEffect } from "react";
import {
  PlaceWrapper,
  ImageWrapper,
  DetailsWrapper,
} from "./ViewListing.styled.js";
import { HotelLocationContext } from "../../../context/HotelLocationContext.jsx";

const ViewListing = () => {
  const { hotelLocation } = useContext(HotelLocationContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <h4>Loading listings...</h4>;
  }

  if (error) {
    return <h4>Error: {error}</h4>;
  }

  return (
    <>
      <h4>My Hotel List</h4>
      <div>
        {listings.length > 0 ? (
          listings.map((itemListing, index) => {
            const imageBuffer = itemListing.images[0].data;
      
            return (
              <PlaceWrapper key={itemListing._id}>
                <span>
                  <ImageWrapper>
                    <img
                      src={`data:image/jpeg;base64,${imageBuffer}`}
                      alt={itemListing.listName}
              
                    />
                  </ImageWrapper>
                  <button>Edit</button>
                  <button>Delete</button>
                </span>
                <DetailsWrapper>
                  <span>
                    <p className="location">
                      Entire Home in{" "}
                      {hotelLocation === "All Locations"
                        ? "several places"
                        : hotelLocation}
                    </p>
                    <h1>{itemListing.listName}</h1>
                  </span>
                  <span>
                    <p className="details">
                      {itemListing.guests} guests · {itemListing.rooms} bedrooms
                      · {itemListing.rooms} beds · {itemListing.baths} baths
                    </p>
                    <p className="details">{itemListing.amenities}</p>
                  </span>
                  <span>
                    <p>{itemListing.rating} ⭐ (120 reviews)</p>
                  </span>
                </DetailsWrapper>
              </PlaceWrapper>
            );
          })
        ) : (
          <p>No listings found</p>
        )}
      </div>
    </>
  );
};

export default ViewListing;
