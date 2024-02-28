import React from 'react'
import { Button, Card, Col, Navbar, Row } from 'react-bootstrap'
import Navbars from '../../Components/navbar/Navbars'
import "./Home.css";
import Footer from '../../Components/Footer';
import Registration from '../registrationpage/Registration';

function Home() {
  return (
    <>
    <div className="head">
   <Row>
    <div className="col-md-4">
      <div>
             <h2>Benefits of medical Laboratory services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque magnam deleniti assumenda doloribus eius impedit, in nisi rem dolor! Earum dolore nisi cupiditate? At, et! Molestias facere eligendi obcaecati cupiditate.</p>
      </div>
      <div>
      <h2>Benefits of medical radiology services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque magnam deleniti assumenda doloribus eius impedit, in nisi rem dolor! Earum dolore nisi cupiditate? At, et! Molestias facere eligendi obcaecati cupiditate.</p>
      </div>
      <div>
      <h2>Benefits of medical specialist services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque magnam deleniti assumenda doloribus eius impedit, in nisi rem dolor! Earum dolore nisi cupiditate? At, et! Molestias facere eligendi obcaecati cupiditate.</p>
      </div>
    </div>
    <div className="col-md-8">
      <h3>if you are a qualified and experienced laboratory, scan or specialist, then your patients are looking for you</h3>
      <h1>Get Registered!</h1>
      <Registration/>
    </div>
   </Row>
    </div>


    <div className="search">
      <Button>Search now!</Button>
    </div>
    <div className='wrapper'>

      <div className="layout-grid">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/USG2.webp" />
      <Card.Body>
        <Card.Title>Pregnancy Scan</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/LAB5.webp" />
      <Card.Body>
        <Card.Title>DNA Test</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/XRAY2.jpg" />
      <Card.Body>
        <Card.Title>X-Ray Fingers</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/LAB3.jpg" />
      <Card.Body>
        <Card.Title>Malaria Test</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       </Card.Body>
    </Card>


        {/* <div className="card"> <img src="images/USG2.webp"/> </div>
        <div className="card"><img src="images/XRAY2.jpg"/></div>
        <div className="card"><img src="images/CT1.jpg"/></div> 
        <div className="card"><img src="images/XRAY2.jpg"/></div>
        <div className="card"><img src="images/LAB1.jpg"/></div>
        <div className="card"><img src="images/LAB2.jpeg"/></div>
        <div className="card"><img src="images/LAB3.jpg"/></div>
        <div className="card"><img src="images/LAB5.webp"/></div> */}
      </div>
    </div>
    <div className="search">
      <Button>Search now!</Button>
    </div>
    </>
    
  )
}

export default Home