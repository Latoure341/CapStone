import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Listing from "./pages/Listing/Listing.jsx"
import Login from "./pages/Login/Login.jsx";
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard.jsx';
import PlacePreview from './pages/PlacePreview/PlacePreview.jsx';
import ListingCreation from './pages/Admin/ListingCreation/ListingCreation.jsx';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listing' element={<Listing />} />
            <Route path='/listingCreation' element={<ListingCreation />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/preview' element={< PlacePreview/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;