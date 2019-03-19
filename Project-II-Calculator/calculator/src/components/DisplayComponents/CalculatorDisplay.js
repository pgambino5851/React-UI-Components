import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

// let actionBtnArr = [
//     {
//         name: 'Clear',
//         value: 'none'
//     },

//     {
//         name: "0",
//         value: '0'
//     }
// ]

const ClearBtn = {
    name: 'Clear',
    value: 'none'
};

const ZeroBtn ={
    name: '0',
    value: 0
}

let calcDigits =[
    {
        name: '7',
        value: 7
    },

    {
        name: '8',
        value: 8
    },

    {
        name: '9',
        value: 9
    },

    {
        name: '4',
        value: 4
    },

    {
        name: '5',
        value: 5
    },

    {
        name: '6',
        value: 6
    },
    
    {
        name: '1',
        value: 1
    },

    {
        name: '2',
        value: 2
    },

    {
        name: '3',
        value: 3
    }
]


let operators = [

    {
        name: '÷',
        operator: '/'
    },

    {
        name: 'x',
        operator: '*'
    },

    {
        name: '-',
        operator: '-'
    },

    {
        name: '+',
        operator: '+'
    },

    {
        name: '=',
        operator: '='
    }
]

const CalculatorDisplay = () => {
    return(
        <div className="calc-container">
            <div className="calc-display">
                <p>0</p>
            </div>
            <div className="buttons-container">
                <div className="white-btns">
                    <ActionButton actionBtnProp = {ClearBtn} /> 
                    <div className="digits">
                        {calcDigits.map(digit =>(
                            <NumberButton numProp ={digit} />
                        ))}
                    </div>
                    <ActionButton actionBtnProp = {ZeroBtn} /> 
                </div>
                <div className="red-btns">
                
                </div>
            </div>
        </div>
    );
}

export default CalculatorDisplay;