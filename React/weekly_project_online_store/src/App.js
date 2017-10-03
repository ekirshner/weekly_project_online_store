import React, { Component } from 'react';
import logo from './rubyReds.png';
import cart from './cart.png';
import './App.css';

import { Link, Route, Switch, withRouter } from 'react-router-dom';

import Home from './views/home';
import Heels from './views/heels';
import Flats from './views/flats';
import Mens from './views/mens';
import Cart from './views/cart';
import Details from './details';

import shoeList from './items';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  addShoeToCart(shoe) {

    console.log('shoeList[shoe] console log below')
    console.log(shoeList[shoe])

    this.setState({
      cart: this.state.cart.concat([shoeList[shoe]])
    }, () => {
      console.log('console log that should work below')
      console.log(this.state.cart)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/heels">Heels</Link></li>
              <li><Link to="/flats">Flats</Link></li>
              <li><Link to="/mens">Mens</Link></li>
              <li><Link to="/cart"><img className="cart" src={cart} /></Link></li>
            </ul>
          </nav>

          <h2>Welcome to Erica's Fabulous Online Shoe Store</h2>
        </div>

        <main>
          <Switch>

            {/* // Inside of <Heels> you'll have a this.props.onCartAdd function. Call it whenever you need to add 
            // something to the cart, passing the shoe to add as a param. */}

            <Route path="/heels" render={() => <Heels onCartAdd={shoe => this.addShoeToCart(shoe)} /> } /> 
            <Route path="/flats" render={() => <Flats onCartAdd={shoe => this.addShoeToCart(shoe)} /> } />
            <Route path="/mens" render={() => <Mens onCartAdd={shoe => this.addShoeToCart(shoe)} /> } />
            <Route path="/cart" render={() => <Cart cartItems={this.state.cart} />} />
            <Route path="/details/:id" render={(props) => <Details {...props} onCartAdd={shoe => this.addShoeToCart(shoe)} />} />
            <Route path="/" render={() => <Home onCartAdd={shoe => this.addShoeToCart(shoe)} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
