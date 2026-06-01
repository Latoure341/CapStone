import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Listing from "./pages/Listing/Listing.jsx"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listing' element={<Listing />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router