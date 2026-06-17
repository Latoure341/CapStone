import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../components/Footer/Footer.jsx";
import {
  ReservationContainer,
  Title,
  TableContainer,
  Table,
  Th,
  Td,
  Tr,
  ActionButton,
} from "./ViewReservation.styled.js";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const ViewReservation = () => {

  const [reservation, setReservation] = useState([]);
  const [ error, setError ] = useState(false);

  const deleteHandler = async (property) => {
    try {
    const response = await axios.delete(`${apiBaseUrl}/api/reservation/delete`, {
      data: { property },
    });
    alert(response.data.message); // Server response payload
    window.location.reload()
  } catch (error) {
    console.error('Error fetching data:', error);
  };
  }

  //Retrieving Data from Backend
  useEffect(() => {
    const fetchReservations = async () => {
      axios
        .get(`${apiBaseUrl}/api/reservation/reservedPlace`)
        .then((response) => {
          setReservation(response.data.reservedPlace);
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
    };
    fetchReservations();
  }, []);
  if(error) {
    return (
      <>
        <p style={{width: '100%', textAlign: 'center'}}>The reservation is empty or the server encounter an internal error</p>
      </>
    )
  }

  return (
    <>
      <ReservationContainer >
        <Title>Reservations</Title>

        <TableContainer>
          <Table>
            <thead>
              <Tr>
                <Th>Booked By</Th>
                <Th>Property</Th>
                <Th>Checkin</Th>
                <Th>Checkout</Th>
                <Th>Actions</Th>
              </Tr>
            </thead>
            <tbody>
              {
                reservation.map((item, index) => {
                  return (
                    <Tr key={item._id}>
                      <Td>{item.booker}</Td>
                      <Td>{item.propertyName}</Td>
                      <Td>{item.checkIn}</Td>
                      <Td>{item.checkOut}</Td>
                      <Td>
                        <ActionButton onClick={() => deleteHandler(item.propertyName)}>Delete</ActionButton>
                      </Td>
                    </Tr>
                  );
                })
              }
            </tbody>
          </Table>
        </TableContainer>
      </ReservationContainer>

      <Footer />
    </>
  );
};

export default ViewReservation;
