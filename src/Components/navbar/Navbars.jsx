import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Navbars() {
    const navigate = useNavigate();
  return (
    <div>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" onClick={()=>{"/"}}><h2>mediScope</h2></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/registration")}}>Facility Registration</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/search")}}>Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars