import React, { useContext } from "react";
import { Container } from "./Home.styled";
import NavBar from "../../components/NavBar/NavBar.jsx";
import LocationModal from "../../components/Modals/LocationModal/LocationModal.jsx";
import Cta from "../../components/CTA/Cta.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import {HotelLocationContext} from "../../context/HotelLocationContext.jsx";
import { GuestsContext } from "../../context/GuestsContext.jsx";
import GuestsModal from "../../components/Modals/GuestsModal/GuestsModal.jsx";

const Home = () => {

  const { hotelModal } = useContext(HotelLocationContext);
  const { guestsModal, setGuestsModal } = useContext(GuestsContext);

  return (
    <>
      <Container>
        <NavBar />
        {hotelModal && <LocationModal />}
        {guestsModal && <GuestsModal />}
        <Cta onClick={() => setGuestsModal(false)}/>
      </Container>
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
