import axios from "axios";


const fetchAsanaData = () => {
    return axios.get('http://localhost:5000/asanas')
      .then((data) => {
  
        console.log(data.data.asanas[0]);
        return data.data.asanas;
      })
      .catch(err => {
        console.error(err);
      });
}

const fetchUserData = () => {

  return axios.get('http://localhost:5000/user')
      .then((data) => {
  
        console.log(data.data.asanas[0]);
        return data.json();
      })
      .catch(err => {
        console.error(err);
      });
}

export default fetchAsanaData;
  