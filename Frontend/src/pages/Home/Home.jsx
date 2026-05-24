import React from 'react'
import { Container } from './Home.styled'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Cta from '../../components/CTA/Cta.jsx'
import Cards from '../../components/Cards/Cards.jsx'

const Home = () => {
  return (
    <>
    <Container>
      <NavBar />
      <Cta />
    </Container>
    <Cards />
    </>
  )
}

export default Home