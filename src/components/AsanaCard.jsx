import { useEffect, useState } from "react";


 const AsanaCard = (props) => {
    const { sanskritName, englishName, postureType, description } = props;

    //console.log(" these are the props:", props);

    

    return (
        <>
            <li>
            <h2>
                {englishName}
            </h2>
                <p>Sanskrit Name:{sanskritName}</p>
                <p>Posture Type:{postureType}</p>
                <p>Description:{description}</p>
            
            <button> Read More</button>
            <button> Favorite </button>
            <button> Share!</button>

        </li>
        </>
        
    );
 }

 export default AsanaCard;