import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bullMarketIcon from "../images/bullMarketIcon.png";
import { NavLink } from "react-router-dom";


function NavigationBar() {
  const [userAuthentication, setUserAuthentication] = useState([]);
  const handleChange = event => setUserAuthentication(event.target.value);

  // useEffect(() => {
  //   fetch("/api/userCredentials")
  //     .then((res) => res.json())
  //     .then((data) => setUserAuthentication(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div style={{ marginBottom: "70px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          
          <img src={bullMarketIcon} alt="Bull Market" />
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
          Login/Register
        </button>
      </Navbar>

      <div
        id="myModal"
        className="modal fade"
        role="dialog"
        style={{ color: "black" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Login to your account</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div>
                <input placeholder="User ID"  onChange={handleChange} />
                <input placeholder="Password" type="password" />
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <NavLink
                to="/createAccount"
                href="createAccount"
                className="btn btn-link"
              >
                Create Account
              </NavLink>
              <button
                type="button"
                className="btn btn-default"
                style={{
                  backgroundColor: "lightblue",
                  border: "solid",
                  borderColor: "skyblue",
                }}
                onClick={() => console.log(userAuthentication)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
