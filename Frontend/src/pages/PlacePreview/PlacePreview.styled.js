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
  .reviews {
    text-decoration: underline;
    text-underline-offset: 2px;
    font-weight: 600;
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

export const PlaceDetailContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 4rem;
  padding: 0 3rem;
`;

export const DetailsContainer = styled.div`
  width: 55%;
  padding: 1rem 0;

  .description {
    border-bottom: 1px solid gray;
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`;
export const DetailSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid gray;

  div {
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  h4,
  p {
    padding: 0;
    margin: 0;
  }
  .cancel {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .icon {
    font-size: 1.5rem;
  }
`;

export const SleepSection = styled.div`
  border-bottom: 1px solid gray;
  img {
    width: 20rem;
  }
`;

export const OfferSection = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid gray;

  .offerContainer {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
`;
export const OffersWrapper = styled.span`
  diplay: flex;
  align-items: center;
`;

export const AmenityButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 8px;
`;

export const CalendarWrapper = styled.div`
  padding: 1rem;
  h3,
  .date {
    margin: 0.1rem 0;
    padding: 0;
  }
  .date {
    font-size: 0.8rem;
  }
  .reserveDates {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: rgb(150, 150, 150);
  }
    .calendar {
      padding: 1rem 0;
    }
`;
export const ReviewsContainer = styled.div`
  border-top: 1px solid gray;
  padding: 0.5rem 0;
  .reviewsSummary {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0 1rem 0;
  }
  .reviewsSummary .left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .reviewsSummary .rating {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
  }
  .reviewsSummary .count {
    color: rgb(120,120,120);
    margin: 0;
  }

  .metricsGrid {
    display: flex;
    gap: 2rem;
    padding: 0.5rem 0 1rem 0;
  }
  .metricsColumn {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    min-width: 320px;
  }
  .metric {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .label {
    width: 110px;
    color: rgb(80,80,80);
    font-weight: 500;
  }
  .bar {
    flex: 1;
    height: 6px;
    background: rgb(230,230,230);
    border-radius: 999px;
    overflow: hidden;
  }
  .barFill {
    height: 100%;
    background: rgb(0,0,0);
    border-radius: 999px;
  }
  .score {
    width: 36px;
    text-align: right;
    color: rgb(70,70,70);
    font-weight: 700;
  }
  .hostContactSection {
    padding: 1rem 0;
    border-top: 1px solid rgb(230, 230, 230);
  }
  .hostCard {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1.25rem;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 16px;
    background: white;
  }
  .hostAvatar {
    min-width: 72px;
    min-height: 72px;
    border-radius: 50%;
    background: rgb(245, 245, 245);
    display: grid;
    place-items: center;
    color: rgb(145, 145, 145);
    font-size: 3rem;
  }
  .hostDetails {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .hostHeading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .hostHeading p {
    margin: 0;
    color: rgb(70, 70, 70);
  }
  .hostHeading button {
    border: 1px solid rgb(35, 35, 35);
    background: transparent;
    color: rgb(35, 35, 35);
    padding: 0.75rem 1rem;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
  }
  .hostBadges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    color: rgb(115, 115, 115);
    font-size: 0.9rem;
  }
  .hostBadges span {
    padding: 0.35rem 0.75rem;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 999px;
    background: rgb(250, 250, 250);
  }
  .hostDescription {
    margin: 0;
    color: rgb(95, 95, 95);
    line-height: 1.5;
    max-width: 44rem;
  }
  .hostStats {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    color: rgb(105, 105, 105);
    font-size: 0.95rem;
  }
  .thingsToKnowSection {
    margin-top: 1rem;
  }
  .thingsToKnowSection h3 {
    margin: 0 0 1rem 0;
  }
  .ruleGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }
  .ruleColumn {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .ruleColumn h4 {
    margin: 0;
    font-size: 1rem;
  }
  .ruleItem {
    margin: 0;
    color: rgb(90, 90, 90);
    line-height: 1.4;
    font-size: 0.95rem;
  }
  .ruleMore {
    margin: 0.25rem 0 0;
    color: rgb(0, 100, 255);
    font-weight: 700;
    cursor: pointer;
  }
  .hostFooterNote {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgb(230, 230, 230);
  }
  .hostFooterNote p {
    margin: 0;
    color: rgb(110, 110, 110);
    font-size: 0.95rem;
  }

  .reviewsFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
  }
  .pagination {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .page {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    color: rgb(80,80,80);
    cursor: pointer;
  }
  .page.active {
    background: rgb(245,245,245);
    font-weight: 700;
  }
`;
export const DetailsSecondContainer = styled.div`
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(100, 100, 100, 0.2);
  border-radius: 8px;
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    padding: 1rem 9rem;
    border: none;
    border-radius: 8px;
    color: white;
    background-color: rgb(222, 49, 81);
    cursor: pointer;
  }
  .review {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .star {
    font-size: 0.8rem;
    padding: 0;
    margin-top: -0.3rem;
  }
`;

export const DateAndGuests = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0 0 1rem 0;

  .guestsContainer {
    width: 96%;
    margin: 0;
    padding: 0.5rem 1rem;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .guest {
    margin: 0;
    padding: 0;
  }
  .optionContainer {
    margin: 0.5rem auto;
    padding: 0.2rem 0.5rem;
    border: 1px solid gray;
    border-radius: 5px;
    color: rgb(150, 150, 150);
    outline: none;
  }
  option {
  }
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  .date,
  .date-second {
    display: block;
    text-align: start;
    padding: 0.2rem 1rem;
  }
  .date {
    border: 1px solid gray;
    border-top-left-radius: 8px;
  }
  .date-second {
    border: 1px solid gray;
    border-top-right-radius: 8px;
  }
  .title,
  .input {
    margin: 0.5rem auto 0.2rem auto;
    padding: 0;
  }
  .title {
    margin: 0.5rem auto 0 auto;
  }
  .input {
    border: none;
    border-radius: 5px;
    margin: 0.5rem auto 0.2rem auto;
    background-color: rgb(230, 230, 230);
    padding: 0.2rem 0.5rem;
  }
`;
