import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SecondaryNavbar extends Component {

  render() {
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container">

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">


              <div class="navbar-item">
                <div class="field">
                  <div class="control has-icons-right">
                    <input class="input is-primary" type="text" placeholder="Search"/>
                    <span class="icon is-small is-right">
                              <i class="fas fa-search"></i>
                            </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">

                  <Link className="button is-warning" to='/signup'>
                            <span class="icon is-small is-left">
                              <i class="fas fa-cart-plus"></i>
                            </span>

                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SecondaryNavbar;
