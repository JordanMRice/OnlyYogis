import { useEffect, useState } from "react";


 const AsanaCard = (props) => {
    const { sanskritName, englishName, postureType, description } = props;

    //console.log(" these are the props:", props);

    

    return (
        <>
            <div class="card">
                <h2 class="card-header">
                    {englishName}
                </h2>
                    <p class="card-info">Sanskrit Name:{sanskritName}</p>
                    <p class="card-info">Posture Type:{postureType}</p>
                    {/* <p class="card-info">Description:{description}</p> */}
                
                <button class="button"> Read More</button>
                <button class="button"> Favorite </button>
                <button class="button"> Share!</button>

            </div> 
        </>
        
    );
 }

 export default AsanaCard;