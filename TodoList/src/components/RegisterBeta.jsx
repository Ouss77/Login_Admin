import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./RegisterBeta.css";
function RegisterBeta() {
  //const history = useHistory()
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleButtonClick = () => {
  //   history.push('/some/path');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      username,
      email,
      password,
    };

    // Make a POST request to the API endpoint
    axios
      .post("http://localhost:3005/register", formData)
      .then((response) => {
        // Handle the response from the API
        console.log("The response is submitted");
        console.log(response.data)
        // if (response.data.status === 'ok') {
        //   window.location.href = '/Login';
        // }        
        navigate("/login");

      })
      .catch((error) => {
        // Handle errors
        console.log(error);
        console.log("Error submitting data"); // Set error message
      });
  };

  return (
    <div>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login" onSubmit={handleSubmit}>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="User name"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="email"
                  class="login__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button class="button login__submit">
                <span class="button__text">Register</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
              <a href="/login" className="button login__submit">
                <span className="button__text">Login now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </a>
            </form>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterBeta;
