import React from 'react';
import './gallery-items.css';

const GalleryItem = ({name, imageUrl}) => (
    <div className= 'gallery-item'>
        <div className="gallery-image"
           style= {{
              backgroundImage: `url(${imageUrl})`
            }}
        ></div>
        
    </div>
)


export default GalleryItem;