import axios from 'axios';

export default axios({
    "method":"GET",
    "url":"https://quotes15.p.rapidapi.com/quotes/random/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"quotes15.p.rapidapi.com",
    "x-rapidapi-key":"a5431a964dmsh3fe2f2b97c70f4ep1c2083jsnb0757f5b9779",
    "useQueryString":true
    },"params":{
    "language_code":"en"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })