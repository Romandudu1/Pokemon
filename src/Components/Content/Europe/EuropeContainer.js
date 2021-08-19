import React from 'react';

import {NavLink} from 'react-router-dom';
import Europe from './Europe.js';
import {connect} from 'react-redux';
import {addCountryCreator} from '../../../../src/reducers/addTextReducer.js'
import {addImageCreator} from '../../../../src/reducers/addImageReducer.js'
import store from "../../../redux-store";
import {deleteCreator} from "../../../reducers/deleteReducer.js";


let mapStateToProps = (state)=> {

    return {

        addImage: state.addImage.europe,
        newc:state.addText.newCountry,
        image: state.addImage.newImage

    }

}

let mapDispatchToProps = (dispatch)=> {

    return{
        addImageFunc:(imageLink)=>{
            dispatch(addImageCreator(imageLink));
        },
        addTextFunc:(newCountr)=>{
            dispatch(addCountryCreator(newCountr));
        },
        deleteImageFunc:(name)=>{
            dispatch(deleteCreator(name));
        }



    }
}
export default   connect(mapStateToProps, mapDispatchToProps)(Europe);

