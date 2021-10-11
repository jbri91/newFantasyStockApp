import React, { useState } from "react";

export function Validation(username, password, result) {
    const [copyPassword, setCopyPassword] = useState("");
    const [noMatch, setNoMatch] = useState("");
    const [fieldsCheck, setFieldsCheck] = useState("");
    const [passwordRequirements, setPasswordRequirements] = useState("");
    // let checkPassword = password;
    // let regex = new RegExp(/[A-Z]/ && /[0-9]/);
    // let result = regex.test(checkPassword);

  if (username && password) {
    setFieldsCheck("");
    if ((password.length > 8, result)) {
      setNoMatch("");
      setPasswordRequirements("");
      if (copyPassword === password) {
        setNoMatch("");
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

export default Validation;
