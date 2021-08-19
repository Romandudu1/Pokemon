import  axios from 'axios';
import unsplash from 'unsplash-js'

const  instanceChange = axios.create({
    baseURL:'http://localhost:4000/changes'
    
})

export const getCreateChange =(selectedCustomer, selectedCarline, selectedMonth)=>{
    /*alert('start Count')*/
    //alert(selectedCustomer);
      return  instanceChange.get('/CreateChange')
  }


  export const getChangeTypeSelected =(selectedChangeType, selectedChangeSubType, selectednew_change_delete)=>{
    console.log('selected Change Type in Api is ' + selectedChangeType);
    return  instanceChange.post('/selectedChangeType',  {selectedChangeType, selectedChangeSubType, selectednew_change_delete})
}

export const getCountingapiSelectedChangeSubTypeandnew_change_delete =(selectedChangeType, selectedChangeSubType, selectednew_change_delete)=>{
   
    return  instanceChange.post('/selectedSubTypeandChange',  {selectedChangeType, selectedChangeSubType, selectednew_change_delete})
}

export const createLTA =(ChangeObject)=>{
   
    return  instanceChange.post('/CreateLTA',  {ChangeObject})
}

export const getLTA =()=>{
   
    return  instanceChange.get('/getLTA')
}


export const createChange =(ChangeObject)=>{
   
    return  instanceChange.post('/CreateChange',  {ChangeObject})
}

export const EditChange =(ChangeObject)=>{
   
    return  instanceChange.get('/EditChange')
}