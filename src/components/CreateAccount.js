import React, { useState } from "react";
import axios from "axios";

function CreateAccount(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [noMatch, setNoMatch] = useState("");
  const [fieldsCheck, setFieldsCheck] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    const validation = () => {
      let checkPassword = password;
      let regex = new RegExp(/[A-Z]/ && /[0-9]/);
      let result = regex.test(checkPassword);

      if (username && password) {
        setFieldsCheck("");
        if ((password.length > 8, result)) {
          setNoMatch("");
          setPasswordRequirements("");
          if (copyPassword === password) {
            setNoMatch("");
          } else {
            setNoMatch(
              <p
                style={{ fontSize: "15px", color: "red", marginRight: "30px" }}
              >
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
    };

    if (!username && !password) return;
    validation();

    try {
      const body = {
        username: username,
        password: password,
      };

      const response = await axios.post("/api/createaccount", body);
      const { data } = response;
      const cred_data = JSON.parse(data)
      
      localStorage.setItem("id", cred_data.id);
    } catch (error) {
      setCredentialError(error);
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
            required
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: "20px" }}
            placeholder="Username"
          />
          {credentialError ? (
            <p style={{ fontSize: "15px", color: "red" }}>
              Username is already taken
            </p>
          ) : null}
          <input
            required
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{ marginBottom: "20px" }}
            placeholder="Password"
          />
          <input
            required
            className="form-control"
            onChange={(e) => setCopyPassword(e.target.value)}
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
