import  axios from 'axios';
import unsplash from 'unsplash-js'
export const  instance = axios.create({
    baseURL:'http://localhost:4000/students/',

})
export const  instance1 = axios.create({
    baseURL:'http://localhost:4000/name',

})
const  instanceCountries = axios.create({
    baseURL:'https://api.teleport.org/api/',

})
const  instanceCount = axios.create({
    baseURL:'http://localhost:4000/counti'
    
})

const  instanceCountCooper = axios.create({
    baseURL:'https://www.quandl.com/api/v3/datasets/CHRIS/CME_HG11.json?api_key=yRyLk8JGPCeuo5V7b7cT'
    
})
const  instanceCountCooper2 = axios.create({
    
        baseURL:'https://www.quandl.com/api/v3/datasets/CHRIS/CME_HG12.json?api_key=yRyLk8JGPCeuo5V7b7cT'
        
    })
    

export const getCooperPrice=()=>{
return instanceCountCooper.get('')
}


export const getCountingapi =(selectedCustomer, selectedCarline, selectedMonth)=>{
  /*alert('start Count')*/
  //alert(selectedCustomer);
    return  instanceCount.get('/mainCounting', {selectedCustomer,selectedCarline, selectedMonth} )
}
export const getCountingapiSelected =(selectedCustomer, selectedCarline, selectedMonth)=>{
   
      return  instanceCount.post('/mainCounting',  {selectedCustomer, selectedCarline, selectedMonth})
  }


  export const getCountingapiMonths =(selectedMonths)=>{
   
    return  instanceCount.post('/mainCountingMonths',  {selectedMonths})
}



  export const getCountingapiSelectedCarline =(selectedCustomer, selectedCarline)=>{
   
    return  instanceCount.post('/mainCountingCarline',  {selectedCustomer, selectedCarline})
}

export const loadingXlsx =(data)=>{
   
    return  instanceCount.post('/OGCloadxlsx', {data})
}

export const loadingXml =(data)=>{
   
    return  instanceCount.post('/OGCloadxml', {data})
}

export  const getAllCheckings =()=>{

    return  instanceCount.get('/ogcHistory')
 
 }

export const checking =()=>{
   
    return  instanceCount.post('/checking')
}

export const exporting =()=>{
   
    return  instanceCount.post('/exportErrors')
}



export const getCountingapiSelectedCarlineandMonth =(selectedCustomer, selectedCarline, selectedMonth)=>{
   
    return  instanceCount.post('/mainCountingCarlineandMonth',  {selectedCustomer, selectedCarline, selectedMonth})
}

export  const getAllCountriesfromApi =()=>{

    alert(instanceCountries.baseURL + 'countries/')
    return  instanceCountries.get('countries/')

       // .then (res=>res.data)

}

export const getPlaces =(countryID)=>{
    return  instance1.get('/' + countryID)
}


 export const getCountries =(countryID)=>{
   return  instance.get('edit-student/' + countryID)
}

export  const  setCountry=(countryObject)=>{
    return instance.post('create-student', countryObject)
}
export  const  setUserApi=(userObject)=>{
    return instance.post('signingIn', userObject)
}
export  const  authUserApi=(user)=>{
    return instance.post('login', user)
}

export  const getAllCountries =()=>{

   return  instance.get('student-list')

}

export  const deleteCountry =(countryID)=>{

     instance.delete('delete-student/' + countryID)
         .then(res=>{return res.data})
}
