import React, {useEffect, useState} from 'react';
import s from  './Europe.module.css';
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import {addCountryCreator} from '../../../../src/reducers/addTextReducer.js'
import {addImageCreator} from '../../../../src/reducers/addImageReducer'
const newCountry = React.createRef();
const newImage = React.createRef();
const  deletedCounty = React.createRef();
var newCountr;
var imageLink;
var name;

const Europe = (props) =>{
    const [countries, setCountries] = useState(props.addImage)
debugger;
    let state = props.addImage;

    var imgsrc;
    let GetImage = ()=>{
        imageLink = newImage.current.value;
        props.addImageFunc(imageLink);
    }
    let GetCountry=()=>{
        newCountr = newCountry.current.value;
        props.addTextFunc(newCountr);

    }
    let DeleteCountry = (name)=>{
        name = deletedCounty.current.value;
        props.deleteImageFunc(name)
    }

    const ItemOne =(props)=> props.countries.map(countries =>(<NavLink to = {countries.name}><span><img src={countries.flag} alt = {countries.name}/></span></NavLink>));

    const Forma = (props)=>{
        return(
            <div className={s.Europe} >
                <img src ={props.image} alt = {props.newc}/>
                <h1>{props.newc}</h1>
                <input type="text"  ref = {newImage} placeholder="put img url"/>
                <input type="submit" onClick = {GetImage} value = "add  country image"/>
                <input type="text" ref = {newCountry}  placeholder="put the country"/>
                <input type="button" onClick = {GetCountry} value = "add  country name"/>
            </div>
        )
    }
    return  (

        <span className ={s.Europe}>

    <ItemOne countries = {countries} />
  <Forma  newc={props.newc} image = {props.image} />



</span>
    );
}
export default Europe;
