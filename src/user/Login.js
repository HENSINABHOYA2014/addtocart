import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission

    try {
      if (!username || !password) {
        setErrorMessage("Please enter both username and password");
        return;
      }

      const response = await axios.get(`http://localhost:8000/users?username=${username}&password=${password}`);

      if (response.data.length === 0) {
        alert("Username and Password Not Valid");
        return;
      }

      localStorage.setItem('checkUserLogin', JSON.stringify(response.data[0]));
      setUserName("");
      setPassword("");
      setErrorMessage("");
      navigate('/home');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        setErrorMessage(`Server responded with an error: ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an error
        setErrorMessage(`Error: ${error.message}`);
      }
    }
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="User Name"
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button type="submit">Log In</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="links h5">
          <NavLink to="/">Forgot password</NavLink>
          <NavLink to="/">Register</NavLink>
        </div>
      </form>
    </>
  );
};

export default Login;
