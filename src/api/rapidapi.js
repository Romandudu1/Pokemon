import  axios from 'axios';
import unsplash from 'unsplash-js'
const  instanceforImages = axios.create({
    baseURL:'https://bing-image-search1.p.rapidapi.com/images/search',
    headers:{
        "x-rapidapi-key": "aff739c959mshc1dad8b5d02fec5p14bec8jsn27cbc92d71fe",
    }
})
const  instanceCountries2 = axios.create({
    baseURL:'https://restcountries-v1.p.rapidapi.com/',
    headers:{
        "x-rapidapi-key": "aff739c959mshc1dad8b5d02fec5p14bec8jsn27cbc92d71fe"

    }
})
export  const getAllCountriesfromRapidApi =()=>{
    return  instanceCountries2.get('all')

    // .then (res=>res.data)
}
export  const getAllImagesfromRapidApi =(country)=>{
    let countryQuery = country.includes('flag')?country:country + ' beautiful places';

    return  instanceforImages.get('/', { params: { 'q': countryQuery, count:6  } })

    // .then (res=>res.data)
}
export  const getCountryFromRapidApi =(countryName)=>{
    alert("start downloading" + countryName)

    return  instanceCountries2.get('name/' + countryName)

    // .then (res=>res.data)
}
