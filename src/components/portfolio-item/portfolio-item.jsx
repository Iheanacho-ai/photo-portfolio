import React from 'react';
import './portfolio-item.css';

const PortfolioItem = ({name, imageUrl}) => (
    <div className= 'portfolio-item'>
        <div className="portfolio-image"
           style= {{
              backgroundImage: `url(${imageUrl})`
            }}
        ></div>

        <div className="portfolio-name">
            <h3>{name}</h3>
        </div>
        
    </div>
)


export default PortfolioItem;