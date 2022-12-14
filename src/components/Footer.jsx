import React from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Footer = (props) => {
    return (
        
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="row-links">
                        
                        <div className="menu-column">
                            <div className ="footer-title">Teaching Tools</div>
                                <ul className="footer-panel">
                                    <li className="footer-item" ><a className="footer-item-name" href="../Pages/AsanasLibraryPage">Asanas</a></li>
                                    <li className="footer-item"><a className="footer-item-name" href="../Pages/Sequences">Sequences</a></li>
                                    <li className="footer-item" ><a className="footer-item-name" href="../Pages/Breathwork">Breathwork</a></li>
                                    <li className="footer-item"><a className="footer-item-name" href="../Pages/LiveClasses">Live Classes</a></li>
                                    <li className="footer-item"><a className="footer-item-name" href="../Pages/Philosophies">Philosophies</a></li>
                                </ul>
                            
                        </div>
                        
                        <div class="menu-column">
                            <div className ="footer-title">Account</div>
                                <ul className="footer-panel">
                                    
                                    <li className="footer-item"><a className="footer-item-name"  href="../Pages/LoginAndRegister">Login or Register</a></li>
                                    <li className="footer-item"><a className="footer-item-name"  href="../Pages/PasswordReset">Password Reset</a></li>
                                   
                                </ul>
                            
                        </div>

                        <div class="menu-column">
                            <div className ="footer-title">Information</div>
                                <ul className="footer-panel">
                                    
                                    <li className="footer-item"><a className="footer-item-name"  href="../Pages/AboutUs">About us</a></li>
                                    <li class="footer-item"><a class="footer-item-name"  href="../Pages/Philosophy">Philosophy</a></li>
                                   
                                </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
};

export default Footer;

