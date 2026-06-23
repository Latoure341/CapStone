import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

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
  PlaceContainer,
  DateAndGuests,
  AmenityButton,
  OfferSection,
  DateWrapper,
  SleepSection,
  ReviewsContainer,
  OffersWrapper,
  ListingDesc,
  DetailsSecondContainer,
  CalendarWrapper,
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
import { GuestsContext } from "../../context/GuestsContext.jsx";
import { FaRegUserCircle } from "react-icons/fa";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;



const PlacePreview = () => {
  const navigate = useNavigate();
  const { previewNavBar, setPreviewNavBar } = useContext(NavBarContext);
  const { guests } = useContext(GuestsContext);
  const { loggedIn, setLoggedIn } = useContext(LogInContext);
  const itemListing = JSON.parse(localStorage.getItem("itemListing"));
  const [reservedInfo, setReserverdInfo] = useState({});
  const [checkOutDate, setCheckOutDate] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [daysDifference, setDaysDifference] = useState(0);
  const [dateError, setDateError] = useState("");

  const bufferImage = itemListing.images[0].data;
  const username = JSON.parse(localStorage.getItem("LoginDetails"));

  const formatDateString = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toISOString().slice(0, 10);
  };

  const getValidDate = (value, fallback) => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? fallback : date;
  };

  const selectRange = {
    startDate: getValidDate(checkInDate, new Date()),
    endDate: getValidDate(checkOutDate, new Date(Date.now() + 86400000)),
    key: "selection",
  };

  const handleSelectionDate = (ranges) => {
    setCheckInDate(formatDateString(ranges.selection.startDate));
    setCheckOutDate(formatDateString(ranges.selection.endDate));
  };

  useEffect(() => {
    if (!checkInDate || !checkOutDate) {
      setDateError("");
      setDaysDifference(0);
      return;
    }

    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      setDateError("Please choose valid check-in and check-out dates.");
      setDaysDifference(0);
      return;
    }

    if (end <= start) {
      setDateError("Check-out must be later than check-in.");
      setDaysDifference(0);
      return;
    }

    setDateError("");
    setDaysDifference(Math.floor((end - start) / (1000 * 60 * 60 * 24)));
  }, [checkInDate, checkOutDate]);

  const canReserve = Boolean(
    checkInDate && checkOutDate && !dateError && daysDifference > 0,
  );

  const reservationHandler = () => {
    const LoggedIn = JSON.parse(localStorage.getItem("Logged In"))
    if (!canReserve) {
      setDateError("Please select valid reservation dates before continuing.");
      return;
    }
    if(!LoggedIn) {
      alert("Please Logged In First");
      navigate("/login");
    }
    setLoggedIn(true)
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
        navigate("/listing");
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
              <img
                src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                alt="Picture of the host..."
                height={70}
              />
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
            <AmenityButton>Show all 37 anemities</AmenityButton>
          </OfferSection>

          <CalendarWrapper>
            <h3>
              {4} nights in {itemListing.location}
            </h3>
            <span className="reserveDates">
              <p className="date">{checkInDate || "dd/mm/yyyy"}</p>-
              <p className="date">{checkOutDate || "dd/mm/yyyy"}</p>
            </span>
            <div className="calendar">
              <DateRangePicker
                ranges={[selectRange]}
                onChange={handleSelectionDate}
                calendarFocus="forwards"
              />
            </div>
          </CalendarWrapper>

          <ReviewsContainer>
            <span className="reviews">
              <p className="star">⭐</p>
              <p>5.0 · 200 reviews</p>
            </span>
            <div className="anemity">
              <span>
                <span className="reviewCategory">
                  <p>Cleanliness</p>
                  <p>The Bar 5.0</p>
                </span>
                <span className="reviewCategory">
                  <p>Communication</p>
                  <p>The Bar 5.0</p>
                </span>
                <span className="reviewCategory">
                  <p>Checkings</p>
                  <p>The Bar 5.0</p>
                </span>
              </span>
              <span>
                <span className="reviewCategory">
                  <p>Accuracy</p>
                  <p>The Bar 5.0</p>
                </span>
                <span className="reviewCategory">
                  <p>Location</p>
                  <p>The Bar 5.0</p>
                </span>
                <span className="reviewCategory">
                  <p>Value</p>
                  <p>The Bar 5.0</p>
                </span>
              </span>
            </div>
            <div>
              <span>
                <span>1</span>
                <span>2</span>
              </span>
              <AmenityButton>Show all other reviews</AmenityButton>
            </div>
            <div className="hostContactSection">
              <div className="hostCard">
                <div className="hostAvatar">
                  <FaRegUserCircle />
                </div>
                <div className="hostDetails">
                  <div className="hostHeading">
                    <div>
                      <p>Hosted by Ghazal</p>
                      <p>Joined May 2021</p>
                    </div>
                    <button type="button">Contact Host</button>
                  </div>
                  <div className="hostBadges">
                    <span>12 Reviews</span>
                    <span>Identity verified</span>
                    <span>Superhost</span>
                  </div>
                  <p className="hostDescription">
                    Ghazal is a Superhost. Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                  </p>
                  <div className="hostStats">
                    <span>
                      <strong>Response rate:</strong> 100%
                    </span>
                    <span>
                      <strong>Response time:</strong> within an hour
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="thingsToKnowSection">
              <h3>Things to know</h3>
              <div className="ruleGrid">
                <div className="ruleColumn">
                  <h4>House rules</h4>
                  <p className="ruleItem">Check-in: After 4:00 PM</p>
                  <p className="ruleItem">Checkout: 10:00 AM</p>
                  <p className="ruleItem">Self check-in with lockbox</p>
                  <p className="ruleItem">Not suitable for infants (under 2 years)</p>
                  <p className="ruleItem">No smoking</p>
                  <p className="ruleMore">Show more</p>
                </div>
                <div className="ruleColumn">
                  <h4>Health & safety</h4>
                  <p className="ruleItem">Committed to Airbnb’s enhanced cleaning process</p>
                  <p className="ruleItem">Airbnb’s social-distancing and other COVID-19-related guidelines apply</p>
                  <p className="ruleItem">Carbon monoxide alarm</p>
                  <p className="ruleItem">Smoke alarm</p>
                  <p className="ruleItem">Security Deposit - if you damage the home, you may be charged up to $566</p>
                  <p className="ruleMore">Show more</p>
                </div>
                <div className="ruleColumn">
                  <h4>Cancellation policy</h4>
                  <p className="ruleItem">Free cancellation before Feb 14</p>
                  <p className="ruleMore">Show more</p>
                </div>
              </div>
            </div>
            <div className="hostFooterNote">
              <p>
                To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
              </p>
            </div>
          </ReviewsContainer>
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
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </span>
              <span className="date-second">
                <h6 className="title">Check Out</h6>
                <input
                  className="input"
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </span>
            </DateWrapper>
            <div className="guestsContainer">
              <h6 className="guest">Guests</h6>
              <select className="optionContainer">
                <option>{ guests }</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            {dateError && <p className="date-error">{dateError}</p>}
          </DateAndGuests>
          <button
            type="button"
            onClick={() => reservationHandler()}
            disabled={!canReserve}
          >
            Reserve
          </button>
          <p>You won't be charged yet</p>
          <div>
            <span>
              <p>
                R{itemListing.price} x {daysDifference || "1"} night
              </p>
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
            <p>
              R{" "}
              {itemListing.price * Number(daysDifference) +
                0.1 * (itemListing.price * Number(daysDifference)) +
                175 +
                itemListing.price * 0.05}{" "}
            </p>
          </span>
        </DetailsSecondContainer>
      </PlaceDetailContainer>

      <Footer />
    </>
  );
};

export default PlacePreview;
