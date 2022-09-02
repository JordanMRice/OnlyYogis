import { useEffect, useState } from "react";
import AsanaCard from '../components/AsanaCard'
import fetchAsanaData from "../../lib/OnlyYogisApi";
import { Button } from "./Button";
import { text } from "body-parser";
import { set } from "mongoose";

//implement toggle view mode once css is set up
//implement  onClick for AsanaFilter
const AsanaFeed = () => {
    
    //console.log(fetchAsanaData())
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [asanaFilter, setAsanaFilter] = useState("all");
    const [toggleView, setToggleView] = useState(true);


    // function asanaFiltering(filter){
     
    // const toggleViewMode() {
        
    // }
        
        
    // }


        useEffect(() => {
            console.log("this is asana state: ", asanaFilter)
            fetchAsanaData(asanaFilter)
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
        }, [asanaFilter]);
    
        

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
    
        return (

            <div class="feed">
                <ul>
                    <Button
                        
                         onClick={() => setAsanaFilter("all")} 
                         text='All Asanas'/>
                         
                    <Button
                         onClick={(e) => {
                            e.preventDefault()
                            setAsanaFilter("backbend")
                                
                                }} 
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
                
                <h3>
                    <div>
                    {items.map(items => (
                           AsanaCard(items)
                    // .filter(items => (
                    //         items.standing === asanaFilter
                    //     )) 
                        //AsanaCard(items)
                    ))}
                        
                    </div>
                   
                </h3>
                
            </div>
        );
    }
};

export default AsanaFeed;

