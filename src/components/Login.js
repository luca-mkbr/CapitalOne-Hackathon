import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Login.css'
import { getCookie, setCookie } from './Cookies'

const Login = () => {
  useEffect(() => {
    if (getCookie("necessitiesAmount") == null) {
      setCookie("necessitiesAmount", "870", 999)
    }

    if (getCookie("savingsAmount") == null) {
      setCookie("savingsAmount", "120", 999)
    }

    if (getCookie("discretionaryAmount") == null) {
      setCookie("discretionaryAmount", "350", 999)
    }

    if (getCookie("loanPayments") == null) {
      setCookie("loanPayments", "1500", 999)
    }
  }, [])
  let navigate = useNavigate();
  useEffect(() => {
    if (getCookie("ver") === "true") {
      navigate("../home", ({replace:true}));
    }
  })
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "capitaloneuser",
      password: "supersecretpassword"
    },
    {
      username: "c1",
      password: "pass"
    }
  ];

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setCookie("ver", "true", 0.5)
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <Navigate to="/home"/> : renderForm}
      </div>
    </div>
  );
}

export default Login