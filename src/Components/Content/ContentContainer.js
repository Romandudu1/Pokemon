import React from "react";

import {connect} from 'react-redux';



import Content from "./Content";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state)=> {

    return {
        state:state.autorization
    }

}


export default compose (
    connect(mapStateToProps, {}),
    //withAuthRedirect
)
(Content)