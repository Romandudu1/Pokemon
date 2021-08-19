import s from "./Caption.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import logo from "./Leoni.jpg";

const NotLogedCaption = (props)=>{
    return(
        <div className ={s.caption}>
            <img  width = "150 px" height = '100 px' src = {logo} />
          LEONI ENGINEERING TOOLS
            <span className={s.auth}>

    <NavLink to='/login'>Login</NavLink>

    <NavLink to='/signingIn'>Sign In</NavLink>
      </span>

        </div>)

}

export default React.memo(NotLogedCaption);
