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

const fetchSpecificAsana = async(id) => {
  return await axios.get(`http://localhost:5000/asanas/${id}`)
  .then((data) => {
    console.log("in the fetch file", data.data)
    return data.data
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


  