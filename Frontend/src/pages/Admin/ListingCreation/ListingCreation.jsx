import React, { useState } from "react";
import { ListContainer, FormWrapper,
  SecondFormWrapper, SpanContainer,
  SpanUpperContainer, Button, ButtonWrapper } from "./ListingCreation.styled.js";

const ListingCreation = () => {
  const [formData, setFormData] = useState({
    listName: "",
    location: "",
    description: "",
    rooms: "",
    baths: "",
    theType: "Entire Home",
    guests: "",
    price: "",
    amenities: [],
    rating: 0,
  });

  const [amenityInput, setAmenityInput] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rooms" || name === "baths" || name === "guests" || name === "price" 
        ? parseInt(value) || "" 
        : value,
    });
  };

  // Handle amenity addition
  const handleAddAmenity = () => {
    if (amenityInput.trim()) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, amenityInput],
      });
      setAmenityInput("");
    }
  };

  // Handle amenity removal
  const handleRemoveAmenity = (index) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.filter((_, i) => i !== index),
    });
  };

  // Handle file input for images
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // Create previews
    const previews = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previews).then(setImagePreviews);
  };

  // Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Validate required fields
      if (!formData.listName || !formData.location || !formData.description) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      if (images.length === 0) {
        setError("Please upload at least one image");
        setLoading(false);
        return;
      }

      // Create FormData for file upload
      const submitFormData = new FormData();
      
      // Append all form fields
      submitFormData.append("listName", formData.listName);
      submitFormData.append("location", formData.location);
      submitFormData.append("description", formData.description);
      submitFormData.append("rooms", formData.rooms);
      submitFormData.append("baths", formData.baths);
      submitFormData.append("theType", formData.theType);
      submitFormData.append("guests", formData.guests);
      submitFormData.append("price", formData.price);
      submitFormData.append("rating", formData.rating);
      submitFormData.append("amenities", JSON.stringify(formData.amenities));

      // Append image files
      images.forEach((image) => {
        submitFormData.append("images", image);
      });

      // Send to backend
      const response = await fetch("http://localhost:5000/api/listings", {
        method: "POST",
        body: submitFormData,
      });

      if (!response.ok) {
        throw new Error("Failed to create listing");
      }

      const data = await response.json();
      setSuccess("Listing created successfully!");
      
      // Reset form
      setFormData({
        listName: "",
        location: "",
        description: "",
        rooms: "",
        baths: "",
        theType: "Entire Home",
        guests: "",
        price: "",
        amenities: [],
        rating: 0,
      });
      setImages([]);
      setImagePreviews([]);
      setAmenityInput("");

    } catch (err) {
      setError(err.message || "An error occurred while creating the listing");
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    setFormData({
      listName: "",
      location: "",
      description: "",
      rooms: "",
      baths: "",
      theType: "Entire Home",
      guests: "",
      price: "",
      amenities: [],
      rating: 0,
    });
    setImages([]);
    setImagePreviews([]);
    setAmenityInput("");
    setError("");
    setSuccess("");
  };

  return (
    <ListContainer>
      <h2>Create List</h2>
      
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      {success && <div style={{ color: "green", marginBottom: "10px" }}>{success}</div>}

      <FormWrapper>
        <SecondFormWrapper>
          <div>
            <SpanContainer>
              <label>Listing name </label>
              <input 
                type="text" 
                name="listName"
                value={formData.listName}
                onChange={handleInputChange}
                required
              />
            </SpanContainer>
            <SpanContainer>
              <label>Location </label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </SpanContainer>
            <SpanContainer>
              <label>Description </label>
              <textarea 
              cols={32}
              rows={7}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </SpanContainer>
          </div>

          <div>
            <SpanUpperContainer>
              <SpanContainer>
                <label>Rooms</label>
                <input 
                  type="number" 
                  placeholder="2"
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleInputChange}
                />
              </SpanContainer>

              <SpanContainer>
                <label>Baths</label>
                <input 
                  type="number"
                  placeholder="1" 
                  name="baths"
                  value={formData.baths}
                  onChange={handleInputChange}
                />
              </SpanContainer>

              <SpanContainer>
                <label>Type</label>
                <select
                  name="theType"
                  value={formData.theType}
                  onChange={handleInputChange}
                >
                  <option>Entire Home</option>
                  <option>Hotel Suite</option>
                </select>
              </SpanContainer>
            </SpanUpperContainer>
            
            <SpanUpperContainer>
              <SpanContainer>
                <label>Guests</label>
                <input 
                  type="number" 
                  placeholder="4"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                />
              </SpanContainer>
              <SpanContainer>
                <label>Price (R)</label>
                <input 
                  type="number" 
                  placeholder="800"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </SpanContainer>
              <SpanContainer>
                <label>Amenities</label>
                <input 
                  type="text" 
                  value={amenityInput}
                  onChange={(e) => setAmenityInput(e.target.value)}
                  placeholder="e.g., WiFi, Pool, Gym"
                />
              <Button type="button" onClick={handleAddAmenity}>Add +</Button>
              </SpanContainer>
            </SpanUpperContainer>
          </div>

          {/* Display added amenities */}
          {formData.amenities.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              <label>Added Amenities:</label>
              <div>
                {formData.amenities.map((amenity, index) => (
                  <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
                    <span>{amenity}</span>
                    <Button 
                      type="button" 
                      onClick={() => handleRemoveAmenity(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </SecondFormWrapper>

        <div>
          <label>Images</label>
          <input 
            type="file" 
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          <p>{images.length} file(s) selected</p>

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "10px", marginTop: "10px" }}>
              {imagePreviews.map((preview, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img 
                    src={preview} 
                    alt={`Preview ${index + 1}`}
                    style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "4px" }}
                  />
                  <button
                    type="button" 
                    onClick={() => {
                      setImages(images.filter((_, i) => i !== index));
                      setImagePreviews(imagePreviews.filter((_, i) => i !== index));
                    }}
                    style={{ position: "absolute", top: "0", right: "0", background: "red", color: "white", border: "none", borderRadius: "3px", cursor: "pointer" }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <ButtonWrapper>
          <Button type="button" disabled={loading} onClick={handleSubmit}>
            {loading ? "Creating..." : "Create"}
          </Button>
          <Button type="button" onClick={handleCancel} cancel>Cancel</Button>
        </ButtonWrapper>
      </FormWrapper>
    </ListContainer>
  );
};

export default ListingCreation;
