import  axios from 'axios';

export const  instance = axios.create({
    baseURL:'http://localhost:4000/ci/',

})







 


export  const getAllGroup =()=>{

   return  instance.get('MyGroupCI')

}

export  const getAllCombinations =()=>{

    return  instance.get('ArchiveCI')
 
 }

 export  const setChangeCombinations =(combinations)=>{

    return  instance.post('ArchiveCI', {combinations})
 
 }



export const setDataAfterChange =(users)=>{
   
    return  instance.post('MyGroupCI',  {users})
}

export const setCombinationCI =(combination)=>{
   
    return  instance.post('addCombinationCI',  {combination})
}