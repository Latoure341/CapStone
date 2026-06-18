import axios from "axios";
import { useContext, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { NavBarContext } from "../../context/NavBarContext.jsx";
import { LogInContext } from "../../context/LogInContext.jsx";
import { FaKitchenSet, FaRegShareFromSquare } from "react-icons/fa6";
import { CiHeart, CiCalendar } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { BsCamera, BsLeaf, BsStars, BsWifi } from "react-icons/bs";
import { LuRefrigerator } from "react-icons/lu";
import {
  PlaceContainer, DateAndGuests,
  OfferSection, DateWrapper,
  SleepSection,
  OffersWrapper,
  ListingDesc,
  DetailsSecondContainer,
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
import { useNavigate } from "react-router";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const PlacePreview = () => {

  const navigate = useNavigate();
  const { previewNavBar, setPreviewNavBar } = useContext(NavBarContext);
  const { loggedIn, setLoggedIn } = useContext(LogInContext);
  const itemListing = JSON.parse(localStorage.getItem("itemListing"));

  const [reservedInfo, setReserverdInfo] = useState({});
  const [ checkOutDate, setCheckOutDate] =useState("");
  const [ checkInDate, setCheckInDate ] = useState("");
  const [ daysDifference, setDaysDifference ] = useState("")

  const bufferImage = itemListing.images[0].data;
  const username = JSON.parse(localStorage.getItem("LoginDetails"));

  //calculate days
   const calculateDays = () => {
    if (!checkOutDate|| !checkInDate) return (<p>Error</p>);

    // Convert inputs into Date objects
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);

    // Calculate the difference in milliseconds
    const differenceInMs = end - start;

    // Divide by milliseconds in a day: 1000ms * 60s * 60m * 24h
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(differenceInMs / millisecondsPerDay);
    console.log(days)

    setDaysDifference(days);
  };

  const reservationHandler = () => {
    const payload = {
      BookedBy: username.username,
      property: itemListing.listName,
      checkedIn: checkInDate,
      checkedOut: checkOutDate,
    };
    setReserverdInfo(payload);
    console.log(payload.property);
    axios
      .post(`${apiBaseUrl}/api/reservation/reserve`, payload)
      .then((response) => {
        alert(response.data.message);
        navigate('/listing');
      })
      .catch((error) => {
        console.error("Reservation error:", error);
      });
  };

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
              <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" 
              alt="Picture of the host..." height={70}/>
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
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww"
                alt="bedroom"
              />
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
            <p className="review">
              {" "}
              <span className="star">⭐</span> 5.0 · 200 reviews
            </p>
          </span>
          <DateAndGuests>
            <DateWrapper>
              <span className="date">
                <h6 className="title">Check In</h6>
                <input
                  className="input"
                  type="date"
                  value={checkInDate}
                  onChange={(e) => {
                    setCheckInDate(e.target.value)
                    calculateDays();
                  }}
                  placeholder="02/02/2026"
                />
              </span>
              <span className="date-second">
                <h6 className="title">Check Out</h6>
                <input
                  className="input"
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => {
                    setCheckOutDate(e.target.value);
                    calculateDays();
                  }}
                  placeholder="02/03/2026"
                />
              </span>
            </DateWrapper>
            <div className="guestsContainer">
              <h6 className="guest">Guests</h6>
              <select className="optionContainer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </DateAndGuests>
          <button type="button" onClick={() => reservationHandler()}>
            Reserve
          </button>
          <p>You won't be charged yet</p>
          <div>
            <span>
              <p>R{itemListing.price} x {daysDifference || "1"} night</p>
              <p>R {itemListing.price * Number(daysDifference)}</p>
            </span>
            <span>
              <p>Weekly discount</p>
              <p>R {0.1 * (itemListing.price * Number(daysDifference))}</p>
            </span>
            <span>
              <p>Cleaning Fee</p>
              <p>R{75}</p>
            </span>
            <span>
              <p>Service Fee</p>
              <p>R {100}</p>
            </span>
            <span>
              <p>Occupancy taxes and Fees</p>
              <p>R{itemListing.price * 0.05}</p>
            </span>
          </div>
          <span>
            <h4>Total</h4>
            <p>R {( itemListing.price * Number(daysDifference)) + (0.1 * (itemListing.price * Number(daysDifference))) + 175 + (itemListing.price * 0.05)} </p>
          </span>
        </DetailsSecondContainer>
      </PlaceDetailContainer>

      <Footer />
    </>
  );
};

export default PlacePreview;
