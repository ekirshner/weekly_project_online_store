import React, { Component } from 'react';
import shoeList from '../items';
import Item from '../item';

class Mens extends Component {
   constructor(props) {
        super(props);

        this.state = {
            shoeArr: shoeList
        }
    }

    render() {
        const filteredShoes = this.state.shoeArr.map((shoe, index) => {
            if (shoe.category === 'mens') {
                return (
                    <div>
                        <Item key={index} id={index} name={shoe.name} image={shoe.image} price={shoe.price} 
                              onCartAdd={shoe => this.props.onCartAdd(shoe)} />
                    </div>
                );
            }
        })

        return (
            <div className="shoe-container-categories">
                {filteredShoes}
            </div>
        );
    }
}

export default Mens;