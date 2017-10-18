import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import shoeList from '../items';

class Cart extends Component {

    render() {

        let totalHidden = true;
        let noItemsHidden = false;
        let total = null;

        //If there are items in the cart, add up the prices and display the cart total
        if (this.props.cartItems.length > 0) {
            totalHidden = false,
                noItemsHidden = true;

            let runningTotal = 0;

            for (let i = 0; i < this.props.cartItems.length; i++) {
                runningTotal += parseInt(this.props.cartItems[i].price)
            }
            total = runningTotal;
        }

        //Map over the cart items and render them on the page
        const cartDisplay = this.props.cartItems.map((shoe, index) => {
            return <ul className="cart-item" key={index}>
                <div className="cart-name-and-price">
                    <li> {shoe.name} </li>
                    <li className="cart-price"> ${shoe.price} </li>
                </div>
                <li> <img src={shoe.image} className="cart-item-image" /> </li>
            </ul>
        })

        return (
            <div>
                <Link to="/"><button>Continue Shopping</button></Link>
                <div className="the-cart">
                    {cartDisplay}
                </div>
                <p className="cart-total" hidden={totalHidden}> Cart Total: ${total} </p>
                <p hidden={noItemsHidden}> There are currently no items in your cart. </p>
            </div>
        );
    }
}

export default Cart;