import { useEffect, useState } from "react";
import BreathworkCard from '../../components/BreathworkComponents/BreathworkCard'
import fetchBreathworkData from "../../../lib/BreathworkFetch";
import { Button } from "../Button";
import { text } from "body-parser";
import { set } from "mongoose";


const BreathworkFeed = () => {
    
    //console.log(fetchBreathworkData())
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [breathworkFilter, setBreathworkFilter] = useState("all");
    const [toggleView, setToggleView] = useState(true);


    // function asanaFiltering(filter){
     
    // const toggleViewMode() {

        useEffect(() => {
            console.log("this is breathwork state: ", breathworkFilter)
            fetchBreathworkData(breathworkFilter)
            .then(data => {
                    
                    console.log("this is the data in useEffect: ", data);
                    setIsLoaded(true);
                    setItems(data);
                    
                },
                    (error) => {
                    setIsLoaded(false);
                    console.log(error)
                    setError(error);
                }
            );
        }, [breathworkFilter]);
    
        

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
    
        return (

            <div className="buttons">
                <ul>
                    <Button
                        
                         onClick={() => setBreathworkFilter("all")} 
                         text='All Exercises'/>
                         
                    <Button
                         onClick={(e) => {
                            e.preventDefault()
                            setBreathworkFilter("Kundalini")
                                
                                }} 
                         text='Kundalini' /> 
                    <Button 
                        onClick={() => setBreathworkFilter("ayuverda")} 
                        text='Ayuverda' />
                </ul>
                
                <h3 className="breathworkCards">
                    <div>
                    {items.map(items => (
                        BreathworkCard(items)
                    ))}
                        
                    </div>
                   
                </h3>
                
            </div>
        );
    }
};

export default BreathworkFeed;

