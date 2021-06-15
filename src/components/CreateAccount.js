import React, { useDebugValue, useEffect, useImperativeHandle, useState } from "react";
import { useHistory } from "react-router-dom";

function CreateAccount(props) {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [noMatch, setNoMatch] = useState("");
  const [fieldsCheck, setFieldsCheck] = useState("");


  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleCopyPassword(e) {
    setCopyPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    let checkPassword = password;
    let regex = new RegExp(/[A-Z]/ && /[0-9]/);
    let result = regex.test(checkPassword);

    console.log(result);
    if (username && password) {
      setFieldsCheck("");
      if ((password.length > 8, result)) {
        setNoMatch("");
        setPasswordRequirements("");
        if (copyPassword === password) {
          setNoMatch("");

          fetch("api/createaccount", requestOptions)
            .catch((error) => {
              if (error) {
                setError(error);
              }
            });

            fetch("/api/username", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                usernameCredential: username,
                password: password,
              }),
            })
              .then((res) => res.json())
              .then(
                (data) =>
                  props.setAuthentication(data[1]) &
                  props.setUserId(data[0]) &
                  (localStorage.id = data[0])
              ).catch(error => console.log(error))
            
          // history.push("/summary");
        } else {
          setNoMatch(
            <p style={{ fontSize: "15px", color: "red", marginRight: "30px" }}>
              Password does not match
            </p>
          );
        }
      } else {
        setPasswordRequirements(
          <ul style={{ fontSize: "15px", color: "red", marginRight: "30px" }}>
            <li>Password must be 8 or more characters</li>
            <li>Password must have atleast one uppercase letter</li>
            <li>Password must have atleast one Number</li>
          </ul>
        );
      }
    } else {
      setFieldsCheck(
        <p style={{ fontSize: "15px", color: "red", marginRight: "30px" }}>
          Please Fill In All Fields
        </p>
      );
    }
  }

  return (
    <div
      style={{
        border: "15px solid grey",
        width: "400px",
        padding: "50px",
        margin: "0 auto",
        display: "flex",
      }}
    >
      <div className="form-group">
        <h1 className="display-6" style={{ marginBottom: "70px" }}>
          Create An Account
        </h1>
        <form onSubmit={handleSubmit}>
          {fieldsCheck}
          <input
            className="form-control"
            onChange={handleUsername}
            style={{ marginBottom: "20px" }}
            placeholder="Username"
          />
          {error ? (
            <p style={{ fontSize: "15px", color: "red" }}>
              Username is already taken
            </p>
          ) : null}
          <input
            className="form-control"
            onChange={handlePassword}
            type="password"
            style={{ marginBottom: "20px" }}
            placeholder="Password"
          />
          <input
            className="form-control"
            onChange={handleCopyPassword}
            type="password"
            style={{ marginBottom: "20px" }}
            placeholder={"Re-type Password"}
          />
          {noMatch}
          {passwordRequirements}
          <button type="submit" className="btn btn-info">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
