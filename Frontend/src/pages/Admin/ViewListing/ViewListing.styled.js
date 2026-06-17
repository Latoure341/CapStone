import styled from "styled-components";

export const Title = styled.h4`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  padding: 0 3rem;
`;

export const PlaceWrapper = styled.div`

  display: flex;
  gap: 1rem;
  align-items: start;
  padding: 2rem 3rem;
  
`;

export const DetailsWrapper = styled.div``;

export const ImageWrapper = styled.div`
  img {
    width: 300px;
  }
`;

export const ButtonWrapper = styled.span`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1rem;

  .edit {
    padding: 1rem 2rem;
    background-color: rgb(65, 83, 245);
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(129, 129, 129, 0.3);
  }
  .delete {

    padding: 1rem 2rem;
    background-color: red;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(129, 129, 129, 0.5);
  }
`;
