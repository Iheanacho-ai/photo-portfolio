import React from 'react';
import GalleryItems from '../gallery-items/gallery-items';

import './gallery.css';

class Gallery extends React.Component{
    constructor(){
        super()

        this.state = {
           gallerySections: [
               {
                imageUrl: '../../assets/First.png',
                id:4
              },
              {
                imageUrl: '../../assets/First.png',
                id:5
              },
              {
                imageUrl: '../../assets/First.png',
                id:6
              },
              {
                imageUrl: '../../assets/First.png',
                id:7
              },
           ]
        }
        
    }

    render(){
        return(
            <div className="gallery">
                <h2>Gallery</h2>
                <div className="gallery-items">
                    {
                        this.state.gallerySections.map(({id, imageUrl}) => (
                           <GalleryItems key ={id} imageUrl= {imageUrl}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;