import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AsanaCard from './AsanaCard';
import {AsanaInfo} from "../../Pages/AsanaInfoPage";
import {fetchAsanaData} from "../../../lib/AsanaFetch";
import { Button } from "../Button";
import { text } from "body-parser";

//implement toggle view mode once css is set up

const AsanaFeed = () => {
    
    //console.log(fetchAsanaData())
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [asanaFilter, setAsanaFilter] = useState("all");
    const [toggleView, setToggleView] = useState(true);


    const navigate = useNavigate();

    const redirectToAsanaInfo = (id) => {
        navigate("/AsanaInfo", { 
            state: { 
                asanaId: id 
            },
         });
    };
    
   
    const func = {
        testFunc : redirectToAsanaInfo
    };
   

    useEffect(() => {
        console.log("this is asana state: ", asanaFilter)
        fetchAsanaData(asanaFilter)
        .then(data => {
                
                console.log("this is the data in useEffect: ", data);
                setIsLoaded(true);
                for ( let i = 0; i < data.length; i++) {
                    data[i].myFunc = func
                }
                setItems(data);
                
                console.log("inside the useEffect", data)
                
            },
                (error) => {
                setIsLoaded(false);
                console.log(error)
                setError(error);
            }
        );
    }, [asanaFilter]);
      
    
    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
    
        return (
            <div>
                <div className="buttons">
                    <ul className="buttons-container">
                        <Button                           
                            onClick={() => setAsanaFilter("all")} 
                            text='All Asanas'/>                       
                        <Button
                            onClick={() => setAsanaFilter("backbend")} 
                            text='Back Bends' /> 
                        <Button 
                            onClick={() => setAsanaFilter("standing")} 
                            text='Standing' />
                        <Button 
                            onClick={() => setAsanaFilter("sitting")}
                            text='Sitting' />  
                        <Button 
                            onClick={() => setAsanaFilter("reclining")}
                            text='Reclining' />  
                        <Button 
                            onClick={() => setAsanaFilter("twists")}
                            text='Twisting' />  
                        <Button 
                            onClick={() => setAsanaFilter("forwardbends")}
                            text='Foward Bends' />  
                        <Button 
                            onClick={() => setAsanaFilter("inversions")}
                            text='Inversions' />  
                    </ul>
                </div>
                    
                    <h3>
                        <div className="asanaCards">
                            {items.map(items => (
                                // items.redirect = redirectToAsanaInfo()
                                AsanaCard(items )                         
                            ))}  
                        </div>
                    </h3>                    
            </div>          
        );
    }
};

export default AsanaFeed;

