import React, { useContext } from "react";
import { Container } from "./Home.styled";
import NavBar from "../../components/NavBar/NavBar.jsx";
import LocationModal from "../../components/Modals/LocationModal/LocationModal.jsx";
import Cta from "../../components/CTA/Cta.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import {HotelLocationContext} from "../../context/HotelLocationContext.jsx";

const Home = () => {

  const { hotelModal } = useContext(HotelLocationContext);
  return (
    <>
      <Container>
        <NavBar />
        {hotelModal && <LocationModal />}
        <Cta />
      </Container>
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
