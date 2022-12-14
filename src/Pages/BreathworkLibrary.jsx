import React from "react";
import BreathworkFeed from "../components/BreathworkComponents/BreathworkFeed";
import Navbar from "../components/Navbar";

const Breathwork = () => {

    return (
        <>
            <div className="breathwork-library-header"> Browse our library of Breathwork Techniques</div>
            <div>
                < BreathworkFeed />
            </div>
        </>
    );
};

export default Breathwork;
