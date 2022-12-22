import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AsanasLibraryPage from '../Pages/AsanasLibraryPage.jsx';
import BreathWork from '../Pages/BreathworkLibrary.jsx';
import AboutUs from '../Pages/AboutUs.jsx';
import Philosphy from '../Pages/Philosophy.jsx';
import HomePage from '../Pages/Home.jsx';
import Sequences from '../Pages/Sequences.jsx';
import AccountPage from '../Pages/AccountPage.jsx';
import AsanaInfo from "../Pages/AsanaInfoPage.jsx";
//import navbarStyle from '../styles/navBarStyle.css';



function Navbar () {
    return (
        <div >
            <BrowserRouter>
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
                      <Route path="/accountPage" element={
                        <AccountPage />
                    } />
                    <Route path="/asanaInfo" element={
                        <AsanaInfo />
                    } />
                </Routes>
            </BrowserRouter>
        </div>
        
    );
};

export default Navbar;