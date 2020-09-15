import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './collections.css';

class Collection extends React.Component{
    constructor(){
        super()

        this.state = {
            sections: [
                {
                    title: 'Weddings',
                    price: '150,000',
                    text: 'Jac Captures and edit visual content for multiple platforms. Produce photography in various',
                    id: 5

                },
                {
                    title: 'Portrait',
                    price: '91,000',
                    text: 'Jac Captures and edit visual content for multiple platforms. Produce photography in various',
                    size: 'large',
                    id: 6
                    

                },
                {
                    title: 'Fashion',
                    price: '900,000',
                    text: 'Jac Captures and edit visual content for multiple platforms. Produce photography in various',
                    id: 7

                }
            ]
        }
    }


    render(){
        return(
            <div className='collections'>
                <h2 className='collection-title'>COLLECTIONS</h2>
                <hr/>

                <div className="collections-div">
                    {
                        this.state.sections.map(({id, ...OtherProps}) => (
                            <CollectionItem key={id} {...OtherProps} />
                        ))
                    }
               </div>
               
            </div>

        )
    }
}

export default Collection;