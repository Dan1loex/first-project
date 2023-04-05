import React from "react";

//import classes1 from './Button.module.css';

const Button =  props => {
    return <button  type={props.type || 'button'} 
    onClick={props.onClick}>{props.children}</button>
};

export default Button;