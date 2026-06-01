import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationModalContainer } from './LocationModal.styled.js';
import { HotelLocationContext } from '../../../context/HotelLocationContext.jsx';

const LocationModal = () => {
  const navigate = useNavigate();
  const { hotelLocation, setHotelLocation } = useContext(HotelLocationContext)

  const handleClick = (location) => {
    if(location.innerHTML !== " "){
      setHotelLocation(location.innerHTML);
      navigate("/listing");
      // console.log(location.innerHTML);
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