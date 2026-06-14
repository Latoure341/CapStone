import { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { NavBarContext } from "../../context/NavBarContext.jsx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { CiHeart, CiCalendar } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import {
  PlaceContainer,
  ListingDesc,
  ListingDetails,
  ImageContainer,
  DetailsWrapper,
  ImageGrid,
  MainImageContainer,
  PlaceDetailContainer,
  DetailsContainer,
  DetailSubContainer,
} from "./PlacePreview.styled.js";

const PlacePreview = () => {
  const { previewNavBar, setPreviewNavBar } = useContext(NavBarContext);
  console.log(previewNavBar);

  const itemListing = JSON.parse(localStorage.getItem("itemListing"));
  const bufferImage = itemListing.images[0].data;

  return (
    <>
      <NavBar />
      <PlaceContainer>
        <h1>{itemListing.listName}</h1>
        <ListingDesc>
          <ListingDetails>
            <p className="star">⭐</p>
            <p>5.0</p>
            <p className="reviews">200 reviews</p>
            <p>{itemListing.location}</p>
          </ListingDetails>
          <ListingDetails>
            <FaRegShareFromSquare />
            <p>Share</p>
            <CiHeart />
            <p>Save</p>
          </ListingDetails>
        </ListingDesc>
        <ImageContainer>
          <MainImageContainer>
            <img
              src={`data:image/jpeg;base64,${bufferImage}`}
              alt="Important image"
            />
          </MainImageContainer>
          <ImageGrid>
            <img
              src={`data:image/jpeg;base64,${bufferImage}`}
              alt="other pictures"
            />
            <img
              src={`data:image/jpeg;base64,${bufferImage}`}
              alt="other pictures"
            />
            <img
              src={`data:image/jpeg;base64,${bufferImage}`}
              alt="other pictures"
            />
            <img
              src={`data:image/jpeg;base64,${bufferImage}`}
              alt="other pictures"
            />
          </ImageGrid>
        </ImageContainer>
      </PlaceContainer>

      <PlaceDetailContainer>
        <DetailsContainer>
          <DetailsWrapper>
            <span>
              <h3>Entire Rental Hotel Hosted by Eric</h3>
              <p>
                {itemListing.guests} guests · {itemListing.rooms - 1} bedrooms ·{" "}
                {itemListing.rooms - 1} bed/s{" "}
              </p>
            </span>
            <span>
              <img src="#" />
            </span>
          </DetailsWrapper>
          <DetailSubContainer>
            <div>
                <IoHomeOutline />
              <span>
                <h4>Entire Home</h4>
                <p>You will have an apartment to yourself</p>
              </span>
            </div>
            <div>
                <BsStars />
              <span>
                <h4>Enhanced Clean</h4>
                <p>
                  The host commited to AirBnB's 5 steps enhanced cleaning
                  process <strong>Show More</strong>
                </p>
              </span>
            </div>
            <div>
                <SlScreenTablet />
              <span>
                <h4>Self check-in</h4>
                <p>Check yourself in with the keypad</p>
              </span>
            </div>
            <span className="cancel">
                <CiCalendar />
                <h4>Free cancelation before August 18</h4>
            </span>
          </DetailSubContainer>
        </DetailsContainer>
        <div>Details Two</div>
      </PlaceDetailContainer>
    </>
  );
};

export default PlacePreview;
