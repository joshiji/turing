import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {

    render() {
        return (
            <section className="section">
              <div className="container">
                <div className="columns">
                  <div className="column is-10 is-offset-1 box">
                    <p className="is-size-4 has-text-primary">4 items in your cart</p>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}

export default Cart;
