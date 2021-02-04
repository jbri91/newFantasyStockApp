import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bullMarketIcon from "../images/bullMarketIcon.png";
import {NavLink} from "react-router-dom";

function NavigationBar() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {" "}
          <img src={bullMarketIcon} alt="Bull Market" />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <NavLink style={{ color: "gray" }} to="/" href="home">
            Home|
          </NavLink>
          <NavLink style={{ color: "gray" }} to="/report" href="reportPage">
           Report|  
          </NavLink>
          <NavLink style={{ color: "gray" }} to="/summary" href="summaryPage">
            Summary
          </NavLink>
          </div>
        </Nav>
        <NavLink to='/login' style={{ color: "gray" }} href="#login">
          {" "}
          Login/Register{" "}
        </NavLink>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
