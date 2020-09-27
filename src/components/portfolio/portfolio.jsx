import React from 'react';
import Image1 from '../../assets/First.png';
import Image2 from '../../assets/Second.jpg';
import Image3 from '../../assets/white-tshirt.jpg';
import Image4 from '../../assets/food.png';
import PortfolioItem from '../portfolio-item/portfolio-item';
import './portfolio.css';

class Portfolio extends React.Component{
    constructor(){
        super()


        this.state = {
            items:[
            {
                imageUrl: Image1,
                name: 'Wedding',
                id:1
            },
            {
                imageUrl: Image2,
                name: 'Portrait',
                id:2
            },
            {
                imageUrl: Image3,
                name: 'Fashion',
                id:3
            },
            {
                imageUrl: Image4,
                name: 'Food',
                id:4
            }
        ]}
    }


    render(){
        return(
            <div className='portfolio'>
                <h2 className='portfolio-title'>Portfolio</h2>
                <hr className='yellow-hr'/>
                <div className="portfolio-pics">
                    {this.state.items.map(({id, ...otherItems}) => (
                        <PortfolioItem key ={id} {...otherItems}/>
                    ))}
                </div>
            
            </div>
        )
    }
}

export default Portfolio;