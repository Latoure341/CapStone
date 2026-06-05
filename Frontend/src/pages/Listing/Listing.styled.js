import styled from "styled-components";

export const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: center;
  padding: 1rem 3rem;
  width: 100%;

  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #8f8f8f;
  }
`;

export const FilterContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1.5rem;

`;
export const ListingButton = styled.button`
    
    padding: 0.5rem 1rem;
    border: 1px solid #8f8f8f;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
    font-size: 0.9rem;
    color: black;
    transition: all 0.1s ease-in-out;

    &:hover {
      border-color: #8f8f8f;
      color: black;
      transform: scale(1.03);
    }
`;

export const ListingSecondContainer = styled.div`
  padding: 2rem 3rem;
  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1.5rem;
  }
`;

export const ImageWrapper = styled.span`
  width: 300px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const DetailsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  span {
    border-bottom: 1px solid #ddd;
  }
  .location {
    font-size: 1.2rem;
    color: #8f8f8f;
    padding: 0;
    margin-bottom: 0.2rem;
  }
  .details {
    font-size: 1rem;
    color: #838383;
    padding: 0;
    margin: 0.4rem 0;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
    margin-top: 0;
  }
`;
