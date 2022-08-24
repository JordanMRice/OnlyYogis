import { render } from "react-dom";
import React from "react";
import { ReactDOM } from "react";
import { BrowswerRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";



//import Asana from "./components/AsanaFeed.jsx";


const { useState, useEffect } = React;


const App = () => {

  return (
    <>
    <div className="App">
      
      <h1>
        

        <ul id='nav-list'>
          <li><a href="http://localhost:1234/"> Home </a></li>
          <li><a href="http://localhost:1234/AsanaLibrary"> Asanas </a></li>
          <li><a href="http://localhost:1234/Philosphy"> Philosophy </a></li>
          <li><a href="http://localhost:1234/sequences"> Sequences</a></li>
          <li><a href="http://localhost:1234/breathwork"> Breathwork </a></li>
          <li><a href="http://localhost:1234/AboutUs"> About Us</a></li>

        </ul>
        <Navbar />
          
      </h1>
      
          

    </div>
    </>
    
  );
};

render(<App />,document.getElementById("root"));
