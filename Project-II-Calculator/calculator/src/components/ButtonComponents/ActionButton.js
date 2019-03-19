import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    console.log(props);
    return <button className={props.actionBtnProp.actionBtnClassName}>{props.actionBtnProp.name}</button>
}

export default ActionButton;
