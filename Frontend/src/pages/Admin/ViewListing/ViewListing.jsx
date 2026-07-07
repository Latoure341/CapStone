import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  PlaceWrapper,
  ButtonWrapper,
  Title,
  ImageWrapper,
  DetailsWrapper,
} from "./ViewListing.styled.js";
import { HotelLocationContext } from "../../../context/HotelLocationContext.jsx";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const ViewListing = () => {
  const { hotelLocation } = useContext(HotelLocationContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deleteHandler = async (listingName) => {
    try {
      const response = await axios.delete(`${apiBaseUrl}/api/listings/delete`, {
        data: { listingName },
      });
      alert(response.data.message); // Server response payload
      window.location.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Retrieve data from Backend
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/listings/`, {
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
      <Title>Hotel List</Title>
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
                  <ButtonWrapper>
                    <button className="edit">Update</button>
                    <button
                      onClick={() => {
                        deleteHandler(itemListing.listName);
                      }}
                      className="delete"
                    >
                      Delete
                    </button>
                  </ButtonWrapper>
                </span>
                <DetailsWrapper>
                  <span>
                    <p className="location">
                      Entire Home in {itemListing.location}
                    </p>
                    <h1>{itemListing.listName}</h1>
                  </span>
                  <span>
                    <p className="details">
                      {itemListing.guests} guests · {itemListing.rooms} bedrooms
                      · {itemListing.rooms} beds · {itemListing.baths} baths
                    </p>
                    <p className="details">{itemListing.amenities.map((item) => {
                
                        return (
                          item + " · "
                        )
                      })}</p>
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
