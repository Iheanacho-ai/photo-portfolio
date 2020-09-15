import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => (
    <div className= 'header'>
        <div className="logo-title">
            <Link to ='/'>
               <div>hey</div>
            </Link>
        </div>
        
        <div className="options">
            <Link className= 'option' to= '/'> HOME</Link>
            <Link className= 'option' to= '/about'> ABOUT</Link>
            <Link className= 'option' to= '/blog'> BLOG </Link>
            <Link className= 'option' to= '/reviews'> REVIEWS</Link>
            <Link className= 'option' to= '/portfolio'> PORTFOLIO </Link>
            <Link className= 'option' to= '/booknow'> BOOKNOW </Link>
        </div>
    </div>
);

export default Header;