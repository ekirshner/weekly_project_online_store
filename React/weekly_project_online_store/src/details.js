import React, { Component } from 'react';
import shoeList from './items';
import cart from './cart.png';
import { Link } from 'react-router-dom';

class Details extends Component {
   
    render() {
        const id = this.props.match.params.id;

        return (
            <ul className="shoeDivDetails">
                <li> { shoeList[id].name }</li> 
                <li>${ shoeList[id].price }.00</li>
                <li><img className="shoePicDetails" src={ shoeList[id].image } /></li> 
                <button className="add-button" 
                        onClick = { () => this.props.onCartAdd(id) }> 
                        <Link to= "/cart" > Add to Cart  <img className="add-to-cart-button" src={ cart } /></Link>
                </button> 
            </ul>
        );
    }
}

export default Details;