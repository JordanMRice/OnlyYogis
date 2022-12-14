import { render } from "react-dom";
import React from "react";
import { ReactDOM } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

//import Asana from "./components/AsanaFeed.jsx";

//nav bar

const App = () => {

  return (
    <>
      <div className="App"> 
        <h1 id="navbar-container"> 
          <div id="nav-list">
            <li className="navbar-item"><a href="http://localhost:1234/"> Home </a></li>
            <li className="navbar-item"><a href="http://localhost:1234/AsanaLibrary"> Asanas Library </a></li>
            <li className="navbar-item"><a href="http://localhost:1234/Philosphy"> Philosophy </a></li>
            <li className="navbar-item"><a href="http://localhost:1234/LiveClasses"> Live Classes </a></li>
            <li className="navbar-item"><a href="http://localhost:1234/breathwork"> Breathwork </a></li>
            <li className="navbar-item"><a href="http://localhost:1234/AboutUs"> About Us </a></li>
            <div className="navbar-spacer"></div>
            <li><a href="http://localhost:1234/AccountPage"> Account Page </a></li>


          </div>
        </h1>  
      </div>

      <div>
        <Navbar />
      </div>
    
      <div>
      <Footer />
      </div>

    </>
    
    
  );
};

render(<App />,document.getElementById("root"));
