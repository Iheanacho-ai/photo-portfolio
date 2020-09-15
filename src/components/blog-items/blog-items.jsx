import React from 'react';

import './blog-items.css';

const BlogItem = ({imageUrl, title,description}) => (
    <div className= 'blog-item'>
        <div className="blog-image"
           style= {{
              backgroundImage: `url(${imageUrl})`
            }}
        ></div>

        <div className="blog-description">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Read</button>
        </div>
        
    </div>
)


export default BlogItem;