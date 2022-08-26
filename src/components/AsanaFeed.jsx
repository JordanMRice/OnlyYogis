import { useEffect, useState } from "react";
import AsanaCard from '../components/AsanaCard'
import fetchAsanaData from "../../lib/OnlyYogisApi";
import { Button } from "./Button";
import { text } from "body-parser";
//import 


//implement toggle view mode once css is set up
//implement  onClick for AsanaFilter


const AsanaFeed = () => {
    
    //console.log(fetchAsanaData())
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [asanaFilter, setAsanaFilter] = useState("all");


    function asanaFiltering(filter) {
        
        setAsanaFilter(filter)
        fetchAsanaData(asanaFilter)
        console.log("This is the asanaFilter now: ", asanaFilter)
        
        
    }

   


    useEffect(() => {
        fetchAsanaData(asanaFilter)
            .then(data => {
            
                console.log("this is the data: ", data);
                setIsLoaded(true);
                setItems(data);
                

            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    
    }, []);

    // useEffect(() => {
    //     fetchAsanaByType()
    //         .then(data => {
    //             setIsLoaded(true);
    //             setItems(data)

    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
            
    //         );

    // }, []);

   

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
    
        return (

            <div>
                <ul>
                    <Button
                         onClick={() => asanaFiltering("all")} 
                         text='All Asanas' />
                         
                    <Button
                         onClick={() => asanaFiltering("backbend")} 
                         text='Back Bends' /> 
                    <Button 
                        onClick={() => asanaFiltering("standing")} 
                        text='Standing' />
                    <Button 
                        onClick={() => asanaFiltering("sitting")}
                        text='Sitting' />  
                    <Button 
                        onClick={() => asanaFiltering("reclining")}
                        text='Reclining' />  
                    <Button 
                        onClick={() => asanaFiltering("twists")}
                        text='Twisting' />  
                    <Button 
                        onClick={() => asanaFiltering("forwardbends")}
                        text='Foward Bends' />  
                    <Button 
                        onClick={() => asanaFiltering("inversions")}
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

