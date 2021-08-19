import React from 'react';
import s from  './Content.module.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Europe from './Europe/Europe.js';

import LTACreate from '../../ChangeCreate/LTACreate'
import Carusel from '../../ChangeCreate/PackageImplement'
import Main from "../../Main/Main";
import ItemName from "../../ItemName/ItemName";
import EditChange from "../../EditChange/EditChange"
import InputForm from "../../InputForm/InputForm";
import Item from "../../item/Item";
import CountryList from "../../CountryList/CountryList";
import {NavLink, withRouter} from 'react-router-dom';
import Profile from "../../Profile/Profile";
import ProfileContainer from "../../Profile/ProfileContainer";
import EuropeContainer from "./Europe/EuropeContainer";
import CountryContainer from "../../CountryList/CountryContainer";
import Login from "../../Login/Login";
import SignIn from "../../Authentification/SignIn";
import SignInContainer from "../../Authentification/SignInContainer";
import LoginContainer from "../../Login/LoginContainer";
import LoginWithRedux from "../../LoginWithRedux/AuthWithRedux";
import LoginRedux from "../../LoginWithRedux/AuthWithRedux";
import AuthWithRedux from "../../LoginWithRedux/AuthWithRedux";
import AuthWithReduxContainer from "../../LoginWithRedux/AuthWithReduxContainer";
import MainContainer from "../../Main/MainContainer";
import ProfileTest from "../../Profile/ProfileTest";
import CheckItem from "../../CrimpingBase/CheckItem/CheckItem";
import MainCountingContainer from "../../MainCounting/MainCountingContainer";
import ProfileTestContainer from "../../Profile/ProfileTestContainer";
import Ogc from '../../OGC/Ogc'

import ChangeCreate from '../../ChangeCreate/ChangeCreate'
import Customize from '../../TestCustomize/Customize';
import Concept from '../../Concept/Concept';
import MainCI from '../../CI/Main'
import MyGroupCI from'../../CI/MyGroup'
import ArchiveCI from '../../CI/ArchiveCI'
import background from './background.jpg'

const Content = (props) =>{

return (

<div style={{backgroundImage:background}} className = {s.Content}>
<Switch>
    <Route  path="/login" >
        {props.state.isAuth ? <Redirect to="/profile/:userId" /> : <LoginContainer />}
    </Route>

    
    <Route  path="/signingIn" >
        {props.state.isAuth ? <Redirect to="/mainCounting" /> : <AuthWithReduxContainer />}
    </Route>
    <Route path ='/all_countries' exact={true} render ={()=> <MainContainer />}/>
    <Route path ="/CreateLTA" exact={true} render ={()=> <LTACreate />}/>
    <Route path ='/EditChange' exact={true} render ={()=> <EditChange />}/>
    <Route path ='/item/:countryID' exact={true} render ={()=> <Item />}/>
    <Route path ='/name/:countryName'  exact={true}  render ={()=> <ItemName />}/>
    <Route path ='/item/delete/:countryID' render ={()=> <Item />}/>
    <Route path='/profile/:userId' render={()=><ProfileTestContainer />} />
    <Route path ='/main' render ={()=> <CountryContainer />}/>
    <Route path ='/europe' render ={()=> <EuropeContainer />}/>
    <Route path ='/mainCounting' render ={()=> <MainCountingContainer />}/>
    <Route path ='/create' render = {()=><InputForm  />}/>
    <Route path ='/ogc' render = {()=><Ogc  />}/>
    <Route path ='/CreateChange' render = {()=><ChangeCreate  />}/>
    <Route path ='/MainCI' render = {()=><MainCI  />}/>
    <Route path ='/addCombinationCI' render = {()=><MainCI  />}/>
    <Route path ='/inProcessCI' render = {()=><MainCI  />}/>
    <Route path ='/ArchiveCI' render = {()=><ArchiveCI />}/>
    <Route path ='/MyGroupCI' render = {()=><MainCI  />}/>
    <Route path ='/customize' render = {()=><Customize  />}/>
    <Route path ='/Concept' render = {()=><Concept />}/>
    
    
</Switch>
</div>
);
}
export default  React.memo(withRouter(Content));
