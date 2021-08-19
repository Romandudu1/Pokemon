import React from 'react';
import  s from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
const Navigation = () =>{
return ( <div className = {s.navigation}>
<nav>
<ul>
<div>

 <NavLink to="/main"><li>Main</li></NavLink>
    <NavLink to="/profile/:userId"><li>Profile</li></NavLink>
    <NavLink to="/all_countries"><li>All Countries</li></NavLink>
    <NavLink to="/create"><li>Create</li></NavLink>
<NavLink to = "/europe"><li>Europe</li></NavLink>
<NavLink to="/africa"><li>Africa</li></NavLink>
<NavLink to="/asia"><li>Asia</li></NavLink>
<NavLink to="/north_america"><li>North America</li></NavLink>
<NavLink to="/south_america"><li>South America</li></NavLink>
<NavLink to="/australia_oceania"><li>Australia_Oceania</li></NavLink>
</div>
</ul>
</nav>
  </div>);
}
export default Navigation;
