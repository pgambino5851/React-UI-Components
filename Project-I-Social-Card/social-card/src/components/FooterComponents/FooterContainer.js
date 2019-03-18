import React from 'react';
import './Footer.css';
// import FooterContent from './FooterContent'

const FooterContainer = () => {
    return (
    <div className = "footer-container">
        <i className="far fa-comment fa-3x" onClick={turnRed}></i>
        <i className="fas fa-sync-alt fa-3x" onClick={turnRed}></i>
        <i className="fas fa-heart fa-3x" onClick={turnRed}></i>
        <i className="fas fa-envelope fa-3x" onClick={turnRed}></i>
    </div>
    )}

    function turnRed() {
        console.log("Hello!")
    }

export default FooterContainer;