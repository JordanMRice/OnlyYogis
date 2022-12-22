import React from "react";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { fetchSpecificAsana } from "../../lib/AsanaFetch";


const AsanaInfo = (props) => {
   
   const location = useLocation();
//    const { itemId } = state || {};
    const _id = location.state.asanaId;

    console.log('location', location)
    console.log(location.state.asanaId)

    console.log("my _id:", _id)
    
    const [id, setId] = useState(_id)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetching, setFetching] = useState(true)
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetchSpecificAsana(id)
        .then(data => {
            setIsLoaded(true);
            console.log("this is the data inside the specific asana useEffect,", data)
            setItems(data)
            
        },
            (error) => {
                setIsLoaded(false);
                console.log(error)
                setError(error);
            }
        );


    }, [id]);

    //console.log("id", itemId)
    //console.log(state)
    return (
        <div>
            <div> 
                <h1>This is all the asana id: </h1>
            </div>            
        </div>
    );
}


export default AsanaInfo