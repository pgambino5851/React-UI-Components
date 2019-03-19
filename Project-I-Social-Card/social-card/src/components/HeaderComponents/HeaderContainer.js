import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'
const HeaderContainer = () => {
    return(
    
    <div href="https://www.reactjs.org" className="header-container"> 
        <section className="icon-container">
            <ImageThumbnail />
        </section>
        <section className="header-copy-container"> 
            <HeaderTitle />
            <HeaderContent />
        </section>
       
    </div>
    )
}

export default HeaderContainer;