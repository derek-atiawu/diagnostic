import React from 'react'
import { Button, Col, Navbar } from 'react-bootstrap'
import Navbars from '../../Components/navbar/Navbars'
import "./Home.css";
import Footer from '../../Components/Footer';

function Home() {
  return (
    <>
    <div className='homeintro'>
<h1>FIND THE BEST LAB AND SCAN SERVICES</h1> 
 <h2>Fast, Easy, and convenient</h2> 
    </div>
    <div className="search">
      <Button>Search now!</Button>
    </div>
    <div className='wrapper'>
      <div className="layout-grid">
        <div className="card"> <img src="images/USG2.webp"/> </div>
        <div className="card"><img src="images/XRAY2.jpg"/></div>
        <div className="card"><img src="images/CT1.jpg"/></div> 
        <div className="card"><img src="images/XRAY2.jpg"/></div>
        <div className="card"><img src="images/LAB1.jpg"/></div>
        <div className="card"><img src="images/LAB2.jpeg"/></div>
        <div className="card"><img src="images/LAB3.jpg"/></div>
        <div className="card"><img src="images/LAB5.webp"/></div>
      </div>
    </div>
    <div className="search">
      <Button>Search now!</Button>
    </div>
    {/* <div className="happy">
      <h2>happier health outcome!</h2>
    </div> */}
    </>
    
  )
}

export default Home