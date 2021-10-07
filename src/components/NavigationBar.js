import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bullMarketIcon from "../images/bullMarketIcon.png";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

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
  const [isCredentialValid, setIsCredentialValid] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);

  const handleUsername = (event) => {
    setUsernameCredential(event.target.value);
  };
 console.log(props)
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const resetInputFields = () => {
    setUsernameCredential("");
    setPassword("");
  };

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
    if (userId > 0) {
      fetch("/api/foundusername", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: parseInt(userId),
        }),
      })
        .then((res) => res.json())
        .then((data) => setUsernameCredential(data))
        .catch((error) => console.log(error));
    }
  }, [userId, createPassword, createUsername]);

  let handleCredentials = () => {
    fetch("/api/username", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usernameCredential: usernameCredential,
        password: password,
      }),
    }).then((res) => {
      res.json();
      if (res.ok) {
        setIsCredentialValid(true);
        fetch("/api/username", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            usernameCredential: usernameCredential,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then(
            (data) =>
              setAuthentication(data[1]) &
              setUserId(data[0] > 0 ? data[0] : null) &
              setFetchBuyingPower(data[2]) &
              (data[0] > 0 ? (localStorage.id = data[0]) : null)
          )
          .then(
            fetch("/api/foundusername", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: parseInt(userId),
              }),
            })
          )
          .then((data) => setUsernameCredential(data), toggle())
          .catch((error) => console.log(error));
      } else {
        resetInputFields();
        setIsCredentialValid((isCredentialValid) => {
          isCredentialValid = false;
          return isCredentialValid;
        });
      }
    });
  };

  let handleLogOut = () => {
    setAuthentication(false);
    resetInputFields();
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
            onClick={handleLogOut}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={toggle}
            style={{ color: "black" }}
            className="btn btn-info btn-lg"
            href="#login"
          >
            Login/Register
          </button>
        )}
      </Navbar>
      <div>
        <Modal isOpen={showModal} style={{ color: "black" }}>
          <div>
            <div className="modal-content">
              <div className="modal-header">
                <h4> Log in to your account</h4>
                <Button
                  type="button"
                  className="close"
                  onClick={toggle}
                  data-dismiss="modal"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  &times;
                </Button>
              </div>
              <ModalBody>
                <div>
                  <input
                    placeholder="User ID"
                    onChange={handleUsername}
                    value={usernameCredential}
                  />
                  <input
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    type="password"
                  />
                </div>
              </ModalBody>
              <ModalFooter
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  onClick={toggle}
                  to="/createAccount"
                  href="createAccount"
                  style={{
                    color: "black",
                    backgroundColor: "lightblue",
                    border: "solid",
                    borderColor: "skyblue",
                  }}
                >
                  Create Account
                </Button>
                {isCredentialValid ? null : (
                  <div style={{ fontSize: "13px", color: "red" }}>
                    The username or password is incorrect
                  </div>
                )}
                <Button
                  style={{
                    color: "black",
                    backgroundColor: "lightblue",
                    border: "solid",
                    borderColor: "skyblue",
                  }}
                  onClick={handleCredentials}
                >
                  Submit
                </Button>
              </ModalFooter>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default NavigationBar;
