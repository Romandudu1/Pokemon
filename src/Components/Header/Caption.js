import React from 'react';
import s from  './Caption.module.css';
import {NavLink} from "react-router-dom";
import NotLogedCaption from "./notLogedCaption";
import LogedCaption from "./LogedCaption";

const Caption = (props) => {
    return <LogedCaption />
   

}
export default React.memo(Caption);

