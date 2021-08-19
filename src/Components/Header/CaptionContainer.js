import React from "react";

import {connect} from 'react-redux';

import Caption from "./Caption";


let mapStateToProps = (state)=> {

    return {
        isAuth:state.autorization.isAuth
    }

}


export default   connect(mapStateToProps, {})(Caption);