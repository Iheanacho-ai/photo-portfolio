import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


class Header extends React.Component{
    constructor(){
        super()

        this.state = {
            hidden: true
        }
    }

    render(){
        return(
            <div className= 'header'>
                <div className="logo-title">
                    <Link to ='/'>
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
        
            <div className="mobile-nav">
                <div className="toggle-nav-left">
                    <div className="nav-toggle-bar" onClick={()=> this.setState({hidden : !this.state.hidden})}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {
                       this.state.hidden? null : 
                       <div className="options-mobile-nav">
                           <Link className= 'option top-option' to= '/'> HOME</Link>
                           <Link className= 'option' to= '/about'> ABOUT</Link>
                           <Link className= 'option' to= '/blog'> BLOG </Link>
                           <Link className= 'option' to= '/reviews'> REVIEWS</Link>
                           <Link className= 'option' to= '/portfolio'> PORTFOLIO </Link>
                           <Link className= 'option' to= '/booknow'> BOOKNOW </Link>
                       </div>
                    }
                </div>
            </div>
        </div>
        )
    }
}



export default Header;