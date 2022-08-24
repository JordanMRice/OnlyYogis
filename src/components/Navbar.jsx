import React from "react";
import{ BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AsanasLibraryPage from '../Pages/AsanasLibraryPage.jsx';
import BreathWork from '../Pages/Breathwork.jsx';
import AboutUs from '../Pages/AboutUs.jsx';
import Philosphy from '../Pages/Philosophy.jsx';
import HomePage from '../Pages/Home.jsx';
import Sequences from '../Pages/Sequences.jsx';



function Navbar () {
    return (
        <BrowserRouter>
            {/* <nav>

                <Link to="/"> Only Yogis </Link>
            
                   
                        <Link to="../Pages/AsanasLibrayPage.jsx"> Asanas </Link>
                        
                        <Link to="../Pages/Breathwork.jsx"> Breath </Link>
                    
                        <Link to="../Pages/Sequences.jsx"> Sequences </Link>
                    
                        <Link to="../Pages/Philosphy.jsx"> Philosophy </Link>
                   
                    
            
               
            </nav> */}
            <Routes>
                <Route path="/" element={
                    < HomePage/>
                } />

                <Route path="/asanaLibrary" element={
                    <AsanasLibraryPage/>
                } />

                <Route path="/aboutUs" element={
                    <AboutUs />
                } />

                <Route path="/philosphy" element={
                    <Philosphy />
                } />

                <Route path="/breathwork" element={
                    <BreathWork />
                } />

                <Route path="/sequences" element={
                    <Sequences />
                } />




            </Routes>

        </BrowserRouter>
    );
};

export default Navbar;