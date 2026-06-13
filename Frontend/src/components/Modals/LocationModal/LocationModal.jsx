import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationModalContainer } from './LocationModal.styled.js';
import { HotelLocationContext } from '../../../context/HotelLocationContext.jsx';
import { NavBarContext } from '../../../context/NavBarContext.jsx';

const LocationModal = () => {
  const navigate = useNavigate();
  const { hotelLocation, setHotelLocation } = useContext(HotelLocationContext)
  const { setHotelModal } = useContext(HotelLocationContext);
  const { previewNavBar, setPreviewNavBar } = useContext(NavBarContext);

  const handleClick = (location) => {
    if(location.innerHTML !== " "){
      setHotelLocation(location.innerHTML);
      setHotelModal(false);
      setPreviewNavBar(true);
      navigate("/listing");
      
    }
  }

  return (
    <LocationModalContainer>
      <span onClick={(e)=> handleClick(e.target)}>All Locations</span>
      <span onClick={(e)=> handleClick(e.target)}>Cape Town</span>
      <span onClick={(e)=> handleClick(e.target)}>Johannesburg</span>
      <span onClick={(e)=> handleClick(e.target)}>Sandton</span>
      <span onClick={(e)=> handleClick(e.target)}>Alberton</span>
    </LocationModalContainer>
  )
}

export default LocationModal