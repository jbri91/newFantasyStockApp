import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bullMarketIcon from "../images/bullMarketIcon.png";
import { NavLink, useHistory } from "react-router-dom";

function NavigationBar(props) {
  let history = useHistory();
  let { setAuthentication } = props;
  let { authentication } = props;
  const { setFetchBuyingPower } = props;
  const { createPassword } = props;
  const { createUsername } = props;
  const { setUserId } = props;
  const { userId } = props;
  const [usernameCredential, setUsernameCredential] = useState("");
  const [password, setPassword] = useState("");
  
  function handleUsername(event) {
    setUsernameCredential(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (createUsername & createPassword) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usernameCredential: createUsername,
          password: createPassword,
        }),
      };
      fetch("/api/username", requestOptions);
    }

    fetch('/api/foundusername', {
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify({
        userId: userId,
      })
    }).then(res => res.json())
    .then(data => setUsernameCredential(data))
    .catch(error => console.log(error))
  });

  const handleCredentials = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usernameCredential: usernameCredential,
        password: password,
      }),
    };
    fetch("/api/username", requestOptions)
      .then((res) => res.json())
      .then(
        (data) =>
          setAuthentication(data[1]) &
          setUserId(data[0]) &
          setFetchBuyingPower(data[2]),
        (localStorage.id = userId)
      );
  };

  let handleAuthentication = () => {
    setAuthentication(false);
    localStorage.clear();
  };

  authentication ? history.push("/summary") : console.log("Please Login");

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
        <div style={{ marginRight: "20px" }}>
          {authentication
            ? "Welcome " +
              (usernameCredential ? usernameCredential : createUsername)
            : null}
        </div>
        {authentication ? (
          <button
            style={{ color: "black" }}
            className="btn btn-info btn-lg"
            onClick={handleAuthentication}
          >
            Log Out
          </button>
        ) : (
          <button
            style={{ color: "black" }}
            className="btn btn-info btn-lg"
            data-toggle="modal"
            data-target="#myModal"
            href="#login"
          >
            Login/Register
          </button>
        )}
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
              <h4 className="modal-title"> Log in to your account</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div>
                <input placeholder="User ID" onChange={handleUsername} />
                <input
                  placeholder="Password"
                  onChange={handlePassword}
                  type="password"
                />
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
                onClick={handleCredentials}
                data-dismiss="modal"
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
