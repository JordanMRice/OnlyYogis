import { useEffect, useState } from "react";
import AsanaCard from '../components/AsanaCard'
import fetchAsanaData from "../../lib/OnlyYogisApi";
import { Button } from "./Button";
import { text } from "body-parser";
//import 


//implement toggle view mode once css is set up
//implement  onClick for AsanaFilter


const AsanaFeed = (props) => {
    
    //console.log(fetchAsanaData())
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [asanaFilter, setAsanaFilter] = useState('false');

    function asanaFiltering(filter){
        
        console.log(filter)
        console.log("onClick is working")
        setAsanaFilter(filter)

    }


    useEffect(() => {
        fetchAsanaData()
            .then(data => {
            
                console.log("this is the data: ", data);
                setIsLoaded(true);
                setItems(data);
                

            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        );
    
    }, []);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
    
        return (

            <div>
                <ul>
                    <Button
                         onClick={() => asanaFiltering(true)} 
                         text='All Asanas' />
                    <Button
                         onClick={() => asanaFiltering('Back Bends')} 
                         text='Back Bends' />
                    <Button 
                        onClick={() => asanaFiltering('Standing')} 
                        text='Standing' />
                    <Button 
                        onClick={() => asanaFiltering('Sitting')}
                        text='Sitting' />  
                    <Button 
                        onClick={() => asanaFiltering('Reclining')}
                        text='Reclining' />  
                    <Button 
                        onClick={() => asanaFiltering('Twisting')}
                        text='Twisting' />  
                    <Button 
                        onClick={() => asanaFiltering('Forward Bends')}
                        text='Foward Bends' />  
                    <Button 
                        onClick={() => asanaFiltering('Inversions')}
                        text='Inversions' />  
                </ul>
                
                <h3>
                    <div>
                    {items.map(items => (
                            items.postureType === asanaFilter ? AsanaCard(items) : AsanaCard(items)
                    // .filter(items => (
                    //         items.standing === asanaFilter
                    //     )) 
                    ))}
                        
                    </div>
                   
                </h3>
                
            </div>
        );
    }
};

export default AsanaFeed;

