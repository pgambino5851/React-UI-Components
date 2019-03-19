import React from 'react';
import './OperatorButton.css';

const OperatorButton = props => {
    return <button className='operator-btn'>{props.opProp.name}</button>
}

export default OperatorButton;
