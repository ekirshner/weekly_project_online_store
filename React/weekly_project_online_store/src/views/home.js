import React, { Component } from 'react';
import Item from '../item';
import shoeList from '../items';

class Home extends Component {
     constructor(props) {
        super(props);

        this.state = {
            shoeArr: shoeList
        }
    }

    render() {
       
        const shoeList = this.state.shoeArr.map((shoe, index) => {
            return (
               <Item key={ index } clickedShoe={ shoe } id={ index } name={ shoe.name } 
               image={ shoe.image } price={ shoe.price }
               onCartAdd={shoe => this.props.onCartAdd(shoe)} />
            );
        })

        return (
            <div>
                <div className="shoeContainer">
                    { shoeList }
                </div>
            </div>
        );
    }
}

export default Home;