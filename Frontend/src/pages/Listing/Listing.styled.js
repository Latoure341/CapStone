import styled from "styled-components";
import { media } from "../../styles/theme";

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

  ${media.laptop} {
    padding: 1rem 2rem;
  }

  ${media.tablet} {
    padding: 1rem 1.25rem;
  }

  ${media.mobile} {
    padding: 1rem 0.75rem;
  }
`;

export const FilterContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  ${media.mobile} {
    gap: 0.75rem;
  }
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

  ${media.mobile} {
    padding: 0.45rem 0.8rem;
    font-size: 0.8rem;
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

  ${media.laptop} {
    padding: 1.5rem 2rem;
  }

  ${media.tablet} {
    padding: 1.25rem 1rem;
  }

  ${media.mobile} {
    padding: 1rem 0.75rem;

    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

export const ImageWrapper = styled.span`
  width: 300px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  ${media.tablet} {
    width: 240px;
    height: 150px;
  }

  ${media.mobile} {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
`;

export const DetailsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  min-width: 0;

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

  ${media.mobile} {
    width: 100%;

    .location {
      font-size: 1rem;
    }

    h1 {
      font-size: 1.2rem;
    }
  }
`;
