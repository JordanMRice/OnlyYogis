import axios from "axios";

const fetchAsanaData = async(posture) => {
    return await axios.get(`http://localhost:5000/asanas/asana/${posture}`)
      .then((data) => {
  
        //console.log("this is coming from the back end: ", data);
        return data.data.asanas;
      })
      .catch(err => {
        console.error(err);
      });
}

const fetchSpecificAsana = async(asanaName) => {
  return await axios.get(`http://localhost:5000/asanas/:asanaId`)
  .then((data) => {
    return data.data.asanas
  })
  .catch(err => {
    console.error(err)
  })
}


// const fetchUserData = () => {

//   return axios.get('http://localhost:5000/user')
//       .then((data) => {
  
//         console.log(data.data.asanas[0]);
//         return data.json();
//       })
//       .catch(err => {
//         console.error(err);
//       });
// }

export  {fetchAsanaData, fetchSpecificAsana }; 


  