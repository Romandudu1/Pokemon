import  axios from 'axios';
import unsplash from 'unsplash-js'



const  instanceWheater = axios.create({
    baseURL:'http://api.openweathermap.org/data/2.5/forecast'
    
})


export  const getWheater =(city)=>{
   

    return  instanceWheater.get('/', { params: { q: city, cnt:25, appid:'f28a07ffe587e19262fded4dc85117f5'  } })

}
    
export  const getWheaterDays =(lon, lat)=>{
   
return  instanceWheater.get('/', { params: { lat, lon, exclude:'hourly,daily', appid:'f28a07ffe587e19262fded4dc85117f5'  } })

}






