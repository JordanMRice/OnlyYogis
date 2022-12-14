import { useEffect, useState } from "react";


 const BreathworkCard = (props) => {
    const { sanskritName, exerciseType, description } = props;

    //console.log(" these are the props:", props);

    

    return (
        <>
            <div class="card">
                <h2 class="card-header">
                    {sanskritName}
                </h2>
                    
                    <p class="card-info">Posture Type: {exerciseType}</p>
                    {/* <p class="card-info">Description:{description}</p> */}
                
                <button class="button"> Read More</button>
                <button class="button"> Favorite </button>
                <button class="button"> Share!</button>

            </div> 
        </>
        
    );
 }

 export default BreathworkCard;