import React from 'react';
import './Button.css';

const NumberButton = (props) =>{
    return <button>{props.numProp.name}</button>
}

export default NumberButton;