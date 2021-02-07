import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bullMarketIcon from "../images/bullMarketIcon.png";
import { NavLink } from "react-router-dom";
import { Button } from "bootstrap";

function NavigationBar() {
  return (
    <div style={{ marginBottom: "70px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {" "}
          <img src={bullMarketIcon} alt="Bull Market" />{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
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
        <button
          style={{ color: "black" }}
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
          href="#login"
        >
          {" "}
          Login/Register{" "}
        </button>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
