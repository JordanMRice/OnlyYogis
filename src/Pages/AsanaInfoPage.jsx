import { useEffect } from "react";
//import fetchAsanaData from "../../../lib/AsanaFetch";
import { fetchSpecificAsana } from "../../lib/AsanaFetch";
const asanaInfo = (props) => {
    const { _id } = props;
    
   

    // useEffect(() => {
    //     fetchSpecificAsana(_id)
    //     .then(data => {
    //         setIsLoaded(true);
    //         setItems(data)
    //     },
    //         (error) => {
    //             setIsLoaded(false);
    //             console.log(error)
    //             setError(error);
    //         }
    //     );


    // }, [_id]);


    return (

        <div>
            <li> This is all the asana info</li>





            
        </div>
    )

}

export default asanaInfo;