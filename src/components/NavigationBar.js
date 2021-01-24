import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import bullMarketIcon from '../images/bullMarketIcon.png'

function NavigationBar() {
  return (
    <div style={{ marginBottom: '70px'}}>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"> <img src={bullMarketIcon} alt='Bull Market'/> </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#stockSearch">Stock Search</Nav.Link>
    </Nav>
    <Nav.Link style={{ color: 'gray'}} href='#login'> Login/Register </Nav.Link>
  </Navbar>
  </div>
  );
}

export default NavigationBar;
