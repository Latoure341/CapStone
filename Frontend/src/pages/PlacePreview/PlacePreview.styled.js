import styled from "styled-components";

export const PlaceContainer = styled.div`
  padding: 2rem 3rem;
  h1 {
    padding: 0;
    margin: 0;
  }
`;

export const ListingDesc = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  padding: auto 0.5rem;
`;

export const ListingDetails = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  .star {
    padding: 0;
    margin-top: 0.7rem;
    margin-right: 0rem;
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;
  border-radius: 10px;
`;
export const MainImageContainer = styled.span`
  img {
    width: 45rem;
    height: 20rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    object-fit: cover;
  }
`;

export const ImageGrid = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  img {
    width: 17rem;
    object-fit: cover;
  }
  img:nth-child(2) {
    border-top-right-radius: 10px;
  }
  img:nth-child(4) {
    border-bottom-right-radius: 10px;
  }
`;
