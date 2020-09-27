import React from 'react';
import Photographer from '../../assets/photographer.jpg';
import Potrait from '../../assets/potrait.jpg';
import Salad from '../../assets/salad.jpg';
import Swag from '../../assets/swag.jpg';
import Wedding from '../../assets/wedding.jpg';
import Clothes from '../../assets/fashion-clothes.jpg';

import GalleryItems from '../gallery-items/gallery-items';
import './gallery.css';

class Gallery extends React.Component{
    constructor(){
        super()

        this.state = {
           gallerySections: [
               {
                imageUrl: Photographer,
                id:4
              },
              {
                imageUrl: Potrait,
                id:5
              },
              
              {
                imageUrl: Salad,
                id:6
              },
              {
                imageUrl: Swag,
                id:7
              },
              {
                imageUrl: Wedding,
                id:8
              },
              {
                imageUrl: Clothes,
                id:9
              },
           ]
        }
        
    }

    render(){
        return(
            <div className="gallery">
                <h2>Gallery</h2>
                <hr className='yellow-hr'/>
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