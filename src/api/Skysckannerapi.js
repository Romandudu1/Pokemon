import  axios from 'axios';
import unsplash from 'unsplash-js'
const  instanceforFlying = axios.create({
    baseURL:'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
    headers:{
        "x-rapidapi-key": "aff739c959mshc1dad8b5d02fec5p14bec8jsn27cbc92d71fe",
    }
})

export  const getAllFlyPlaces =(country)=>{


    return  instanceforFlying.get('/', { params: { 'q': 'Stockholm', country:'UK', currency:'GBP', locale:'en-GB'} })

    // .then (res=>res.data)
}