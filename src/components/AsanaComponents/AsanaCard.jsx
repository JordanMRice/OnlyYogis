import React from "react";


const AsanaCard = (props) => {
    // const [goToPage, setGoToPage] = useState(false);
    const { myFunc, sanskritName, englishName, postureType, _id } = props;

    
    //console.log(" these are the props:", props);
    // console.log("this the type", typeof testFunc)
    // console.log( "these da props", props )
    // console.log( "this is my function", myFunc )


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
                        onClick={() => myFunc.testFunc(_id)}
                        
                        > Read More 
                    </button>
                <button class="button"> Favorite </button>
                <button class="button"> Share!</button>

            </li> 
        </div>
        
    );
 }

 export default AsanaCard;