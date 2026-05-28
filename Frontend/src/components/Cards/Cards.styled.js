import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1rem 2rem;
`;

export const CardSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CardSubWrapper = styled.span`
  width: 300px;
  height: 45vh;
  padding: 0;
  background-color: #b94141;
  border-radius: 10px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    margin: 0;
    object-fit: contain;
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    color: white;
    padding: 0.2rem 1rem;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 0 0;
    padding: 0;
  }
  p {
    padding: 0.1rem;
    margin: 0 0 1rem 0;
  }
`;

export const CardExperienceWrapper = styled.span`
  width: 48%;
  height: 60vh;

  color: white;
  background-image: ${({ secondwrapper }) =>
    secondwrapper
      ? "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlurIrdmF2Donze9YzWRYobXP-nDaSD_Ykg&s)"
      : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTruikTeB5wM_ClhuWSf9-mMYX-dpHNm9kQ&s)"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;

  h2 {
    width: 50%;
    font-size: 3rem;
    font-weight: 500;
    margin: 4rem 0 0 4rem;
    padding: 0;
  }
  button {
    margin: 0.5rem 0 0 4rem;
    background-color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
  }
`;

export const GiftCardWrapper = styled.span`
  h2 {
    width: 70%;
    font-size: 2rem;
    font-weight: 500;
  }
  button {
    background-color: black;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.2rem 0 0 0;
    border: none;
    border-radius: 5px;
  }
  span {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 100%;
  }
`;

export const CardQuestions = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url("https://img.freepik.com/free-photo/rear-view-beautiful-brunette-woman-with-golden-tan-wearing-bikini-standing-profile-green-leaves_197531-22588.jpg?semt=ais_hybrid&w=740&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 10px;

  h1 {
    width: 30%;
    font-size: 4.7rem;
    font-weight: 700;
    color: white;
    margin: 4rem 0 5rem 4rem;
  }
  button {
    background-color: white;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 0.7rem 1.2rem;
    margin: 0 0 0 4rem;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0 4px 8px rgba(19, 19, 19, 0.81);
  }
`;

export const InspirationCardWrapper = styled.div`
  width: 100%;

  .inspirationCategories {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
  }
    .inspirationDestinations {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;

    }
`;
