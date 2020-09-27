import React from 'react';
import Ann from '../../assets/ann.png';
import Janet from '../../assets/janet.jpg';
import Jake from '../../assets/jake.png';
import BlogItems from '../blog-items/blog-items';

import './blog.css';

class Blog extends React.Component{
    constructor(){
        super()

        this.state = {
           blogSections: [
               {
                imageUrl: Ann,
                title: 'ANN FASHION SESSIONS',
                description: 'Smile filled the air with her georgous dress, she smilled, while i took the shots.',
                id:4
              },
              {
                imageUrl: Janet,
                title: 'JANE’S WEDDING',
                description: 'Smile filled the air with her georgous dress, she smilled, while i took the shots.',
                id:5
              },
              {
                imageUrl: Jake,
                title: 'JAKE’S POTRAIT',
                description: 'Smile filled the air with her georgous dress, she smilled, while i took the shots',
                id:6
              },
           ]
        }
        
    }

    render(){
        return(
            <div className="blog">
                <h2>Blog</h2>
                <hr className='yellow-hr'/>
                <div className="blog-items">
                    {
                        this.state.blogSections.map(({id, ...otherProps}) => (
                           <BlogItems key ={id} {...otherProps}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

// {this.state.items.map(({id, ...otherItems}) => (
//     <PortfolioItem key ={id} {...otherItems}/>
// ))}

export default Blog;
