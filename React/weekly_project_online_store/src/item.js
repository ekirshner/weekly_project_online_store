import React, { Component } from 'react';
import cart from './cart.png';
import { Link } from 'react-router-dom';

class Item extends Component {

    render() {

        return (
            <ul className="shoeDiv">
                <li>{this.props.name}</li>
                <li><img className="shoePic" src={this.props.image} /></li>
                <li>
                    <Link to={"/details/" + this.props.id} ><button className="view-details">View Details</button></Link>
                </li>
                <button className="add-button"
                    onClick={() => this.props.onCartAdd(this.props.id)} >
                    <Link to="/cart" > Add to Cart  <img className="add-to-cart-button" src={cart} /></Link>
                </button>
            </ul>
        );
    }
}

export default Item;