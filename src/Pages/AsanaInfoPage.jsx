import { useEffect } from "react";
//import fetchAsanaData from "../../../lib/AsanaFetch";
import { fetchSpecificAsana } from "../../lib/AsanaFetch";
const asanaInfo = (props) => {
    const { id } = props;
    
   
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchSpecificAsana(_id)
        .then(data => {
            setIsLoaded(true);
            setItems(data)
        },
            (error) => {
                setIsLoaded(false);
                console.log(error)
                setError(error);
            }
        );


    }, [_id]);


    return (

        <div>
            This is all the asana info
        </div>
    )

}

export default asanaInfo;