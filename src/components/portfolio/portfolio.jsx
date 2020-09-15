import React from 'react';
import PortfolioItem from '../portfolio-item/portfolio-item';
import './portfolio.css';

class Portfolio extends React.Component{
    constructor(){
        super()


        this.state = {
            items:[
            {
                imageUrl: '../../assets/First.png',
                name: 'Wedding',
                id:1
            },
            {
                imageUrl: '../../assets/TNo1aOslBKY.jpg',
                name: 'Portrait',
                id:2
            },
            {
                imageUrl: '../../assets/woman-wearing-white-shirt-3325917.jpg',
                name: 'Fashion',
                id:3
            },
            {
                imageUrl: '../../assets/4_jhDO54BYg.png',
                name: 'Food',
                id:4
            }
        ]}
    }


    render(){
        return(
            <div className='portfolio'>
                <h2 className='portfolio-title'>Portfolio</h2>
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