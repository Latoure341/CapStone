import React, { useContext, useState, useEffect } from "react"; 
import { PlaceWrapper, ImageWrapper, DetailsWrapper } from "./ViewListing.styled.js";
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
        const response = await fetch("http://localhost:5000/api/listings", {
          method: "GET"
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
          listings.map((listing) => (
            <PlaceWrapper key={listing._id}>
              <span>
                <ImageWrapper>
                  <img
                    src={listing.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc92YDBhnHGuBdtpQ3ThMYSUsz8lCePnq0iA&s"}
                    alt={listing.name}
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
                  <h1>{listing.name}</h1>
                </span>
                <span>
                  <p className="details">
                    {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.baths} baths
                  </p>
                  <p className="details">{listing.amenities}</p>
                </span>
                <span>
                  <p>{listing.rating} ⭐ ({listing.reviews} reviews)</p>
                </span>
              </DetailsWrapper>
            </PlaceWrapper>
          ))
        ) : (
          <p>No listings found</p>
        )}
      </div>
    </>
  );
};

export default ViewListing;
