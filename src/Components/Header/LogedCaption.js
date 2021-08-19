import s from "./Caption.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import logo from "./Leoni.jpg";
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
const { Search } = Input;
const LogedCaption = (props)=>{
    return(
        <div className ={s.caption}>
          
            All World beside
            <span className={s.auth}>
            <Search className={s.searchInput} placeholder="input your pokemon name"  enterButton/>
   
      </span>

        </div>)

}

export default React.memo(LogedCaption)
