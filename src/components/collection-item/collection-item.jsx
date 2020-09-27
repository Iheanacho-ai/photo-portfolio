import React from 'react';
import './collection-item.css';

const CollectionItem = ({title, price, text, size}) => (
    <div className={`${size} collection-item`}>
        <h2>{title}</h2>
        <hr/>
        <h2>{`N ${price}`}</h2>
        <p className='first-name'>{text}</p>
        <p className='second-name'>{text}</p>
        <button className='book-now'>BOOK NOW</button>
    </div>
)


export default CollectionItem;