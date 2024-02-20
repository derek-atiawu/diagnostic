import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/homepage/Home'
import Registration from '../Pages/registrationpage/Registration'
import Search from '../Pages/searchpage/Search'
import Navbars from '../Components/navbar/Navbars'
import Error from '../Pages/error'
import Footer from '../Components/Footer'

function Router() {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/search" element={<Search />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default Router