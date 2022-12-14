import axios from "axios";

const fetchBreathworkData = async(type) => {
    return await axios.get(`http://localhost:5000/breathwork/breathExercise/${type}`)
      .then((data) => {
  
        console.log("this is coming from the back end: ", data);
        return data.data.breathExercises;
      })
      .catch(err => {
        console.error(err);
      });
}




export default fetchBreathworkData; 


  