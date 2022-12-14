//import { useEffect, useState } from "react";

// import { useNavigate } from "react-router-dom";
import {redirectToAsanaInfo } from "./AsanaFeed"

 const AsanaCard = (props) => {
    const { sanskritName, englishName, postureType, _id } = props;

    //console.log(" these are the props:", props);
    // const navigate = useNavigate();
    // const redirectToDetailedAsanaInfo = () => {
    //     navigate(asanaInfo);
    // }
    
  
    return (
        <>
            <li class="card">
                <h2 class="card-header">
                    {englishName}
                    
                </h2>
                    <p class="card-info">Sanskrit Name:{sanskritName}</p>
                    <p class="card-info">Posture Type:{postureType}</p>
                    {/* <p class="card-info">Description:{description}</p> */}
                
                <button 
                class="button"
                    // onClick={redirectToAsanaInfo(_id)}
                > Read More</button>
                <button class="button"> Favorite </button>
                <button class="button"> Share!</button>

            </li> 
        </>
        
    );
 }

 export default AsanaCard;