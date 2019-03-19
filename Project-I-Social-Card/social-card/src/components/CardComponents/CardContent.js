import React from 'react';
import './Card.css';

const CardContent = () => {
    return(
        <section className="card-content-container">
        <h2 className="card-content-header">Get started with React</h2>
        <p className="card-content">React makes it painless to create interactive UIs. Design simple views for each state in your application.
        </p>
        <p className="site-name">reactjs.org</p>
        </section>
    )
}

export default CardContent;