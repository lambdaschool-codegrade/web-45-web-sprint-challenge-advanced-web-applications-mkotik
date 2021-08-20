import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const handleLogout = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then((res) => {
        localStorage.removeItem("token");
        window.location.href = `${window.location.origin}/login`;
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={handleLogout}>
            logout
          </a>
        </header>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/bubblepage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
