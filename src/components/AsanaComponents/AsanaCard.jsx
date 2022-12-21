import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import asanaInfo from "../../Pages/AsanaInfoPage";
import { Link } from "react-router-dom";
import { Button } from "../Button";

 const AsanaCard = (props) => {
    // const [goToPage, setGoToPage] = useState(false);
    const { myFunc, sanskritName, englishName, postureType, _id } = props;

    // const redirection = {};
    // testFunc ? redirection.myFunc = testFunc : console.log("can't stop the funk")
    //console.log(" these are the props:", props);
    // console.log("this the type", typeof testFunc)
    // console.log( "these da props", props )
    console.log( "this is my function", myFunc )

    
    
    return (
        <div>
            
            <li class="card">
                <h2 class="card-header">
                    {englishName}
                    
                    
                </h2>
                    <p class="card-info">Sanskrit Name:{sanskritName}</p>
                    <p class="card-info">Posture Type:{postureType}</p>
                    {/* <p class="card-info">Description:{description}</p> */}
               
                    <button 
                        class="button" 
                        onClick={() => myFunc.testFunc()}
                        > Read More 
                    </button>
                {console.log("type outside button", typeof myFunc)}
                <button class="button"> Favorite </button>
                <button class="button"> Share!</button>

            </li> 
        </div>
        
    );
 }

 export default AsanaCard;