import { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { NavBarContext } from "../../context/NavBarContext.jsx";
import { FaKitchenSet, FaRegShareFromSquare } from "react-icons/fa6";
import { CiHeart, CiCalendar } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { BsCamera, BsLeaf, BsStars, BsWifi } from "react-icons/bs";
import { LuRefrigerator } from "react-icons/lu";
import {
  PlaceContainer, OfferSection,
  SleepSection, OffersWrapper,
  ListingDesc, DetailsSecondContainer,
  ListingDetails,
  ImageContainer,
  DetailsWrapper,
  ImageGrid,
  MainImageContainer,
  PlaceDetailContainer,
  DetailsContainer,
  DetailSubContainer,
} from "./PlacePreview.styled.js";
import { MdDryCleaning, MdSecurity } from "react-icons/md";

const PlacePreview = () => {
  const { previewNavBar, setPreviewNavBar } = useContext(NavBarContext);
  const itemListing = JSON.parse(localStorage.getItem("itemListing"));
  const [reservedInfo, setReserverdInfo] = useState({})
  const bufferImage = itemListing.images[0].data;

  const reservationHandler = () => {
    setReserverdInfo({
      "BookedBy": "The name",
      "property": itemListing.listingName,
      "checkedIn": "02/09/2026",
      "checkedOut": "05/09/2026",
    })
    console.log(reservedInfo.BookedBy);
  }


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
              <IoHomeOutline className="icon" />
              <span>
                <h4>Entire Home</h4>
                <p>You will have an apartment to yourself</p>
              </span>
            </div>
            <div>
              <BsStars className="icon" />
              <span>
                <h4>Enhanced Clean</h4>
                <p>
                  The host commited to AirBnB's 5 steps enhanced cleaning
                  process <strong>Show More</strong>
                </p>
              </span>
            </div>
            <div>
              <SlScreenTablet className="icon" />
              <span>
                <h4>Self check-in</h4>
                <p>Check yourself in with the keypad</p>
              </span>
            </div>
            <span className="cancel">
              <CiCalendar className="icon" />
              <h4>Free cancelation before August 18</h4>
            </span>
          </DetailSubContainer>
          <div className="description">
            <p>
              {itemListing.description}... <strong>Show More</strong>
            </p>
          </div>

          <SleepSection>
            <h3>Where you'll sleeping</h3>
            <span>
              <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww" 
              alt="bedroom" />
              <p>
                Bedroom <br /> 1 queen bed.
              </p>
            </span>
          </SleepSection>

          <OfferSection>
            <h3>What this place will offer</h3>
            <span className="offerContainer">
              <div>
                <OffersWrapper>
                  <BsLeaf />
                  <p>Garden View</p>
                </OffersWrapper>
                <OffersWrapper>
                  <FaKitchenSet />
                  <p>Kitchen</p>
                </OffersWrapper>
                <OffersWrapper>
                  <MdDryCleaning />
                  <p>Dryer</p>
                </OffersWrapper>
              </div>
              <div>
                <OffersWrapper>
                  <MdSecurity />
                  <p>Security Cameras property</p>
                </OffersWrapper>
                <OffersWrapper>
                  <LuRefrigerator />
                  <p>Refrigerator</p>
                </OffersWrapper>
                <OffersWrapper>
                  <BsWifi />
                  <p>WiFi</p>
                </OffersWrapper>
              </div>
            </span>
            <button>Show all 37 anemities</button>
          </OfferSection>

          <div>
            {4} in {itemListing.location}
            <p>From this date To this date</p>
            <p>Calenda to select from and set the dats of the nights</p>
          </div>

          <div>
            <span>
              <p>⭐</p>
              <p>5.0 · 200 reviews</p>
            </span>
            <div>
              <span>Cleanliness, Communication, Checkings</span>
              <span>Accuracy, Location, Value</span>
            </div>
            <div>
              <span>
                <span>1</span>
                <span>2</span>
              </span>
              <button>Show all other reviews</button>
            </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </DetailsContainer>
        <DetailsSecondContainer>
          <span>
            <h4>R {itemListing.price} /Night</h4>
            <p className="review"> <span className="star">⭐</span> 5.0 · 200 reviews</p>
          </span>
          <span>
            <p>The check out, check-in and guests details</p>
          </span>
          <button type="button" onClick={reservationHandler()}>Reserve</button>
          <p>You won't be charged yet</p>
          <div>
            <span>
              <p>R{itemListing.price} x 1 night</p>
              <p>Price</p>
            </span>
            <span>
              <p>Weekly discount</p>
              <p>Price</p>
            </span>
            <span>
              <p>Cleaning Fee</p>
              <p>R75</p>
            </span>
            <span>
              <p>Service Fee</p>
              <p>R100</p>
            </span>
            <span>
              <p>Occupancy taxes and Fees</p>
              <p>R{itemListing.price * 0.05}</p>
            </span>
          </div>
          <span>
            <h4>Total</h4>
            <p>The price</p>
          </span>
        </DetailsSecondContainer>
      </PlaceDetailContainer>

      <Footer />
    </>
  );
};

export default PlacePreview;
