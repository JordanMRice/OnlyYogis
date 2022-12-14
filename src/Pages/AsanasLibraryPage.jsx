import React from "react";
import AsanaFeed from '../components/AsanaComponents/AsanaFeed.jsx'
import Navbar from "../components/Navbar.jsx";

const AsanasLibrary = () => {

    return (
        <>
            <div className="asana-library-header"> Browse our library of Yoga Asanas</div>
            <div>
                < AsanaFeed />
            </div>
        </>
    )
}

export default AsanasLibrary;