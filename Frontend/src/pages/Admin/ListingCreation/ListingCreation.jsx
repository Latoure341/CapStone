import React from "react";
import { ListContainer, FormWrapper,
  SecondFormWrapper, SpanContainer } from "./ListingCreation.styled.js";

const ListingCreation = () => {
  return (
    <ListContainer>
      <h2>Create List</h2>
      <FormWrapper>
        <SecondFormWrapper>
          <div>
            <SpanContainer>
              <lable>Listing name </lable>
              <input type="text" />
            </SpanContainer>
            <SpanContainer>
              <lable>Location </lable>
              <input type="text" />
            </SpanContainer>
            <SpanContainer>
              <lable>Description </lable>
              <input type="textarea" />
            </SpanContainer>
          </div>

          <div>
            <div>
              <SpanContainer>
                <label>Rooms</label>
                <input type="number" />
              </SpanContainer>
              <SpanContainer>
                <label>Baths</label>
                <input type="number" />
              </SpanContainer>
              <SpanContainer>
                <label>Type</label>
                <select>
                  <option>Entire Home</option>
                  <option>Hotel Suite</option>
                </select>
              </SpanContainer>
            </div>
            <div>
              <SpanContainer>
                <label>Guests</label>
                <input type="number" />
              </SpanContainer>
              <SpanContainer>
                <label>Amneties</label>
                <input type="text" />
                <button>Add +</button>
              </SpanContainer>
            </div>
          </div>
        </SecondFormWrapper>

        <div>
          <label>Images</label>
          <input type="file" />
          <button>Upload the image</button>
        </div>

        <div>
          <button>Create</button>
          <button>Cancel</button>
        </div>
      </FormWrapper>
    </ListContainer>
  );
};

export default ListingCreation;
