import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
              <div className="container">
                  <div className="navbar-brand">
                    <a className="navbar-item is-size-4 has-text-danger" href="/">
                      T-SHOP
                    </a>
                
                    <a href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                  </div>
                
                  <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                      <Link className="navbar-item" to="/men">
                        Men
                      </Link>
                
                      <Link className="navbar-item" to="/women">
                        Women
                      </Link>
                      
                      <Link className="navbar-item" to="/kids">
                        Kids
                      </Link>
                    </div>
                
                    <div className="navbar-end">
                    
                      <div class="navbar-item">
                        <div class="field">
                          <div class="control has-icons-right">
                            <input class="input" type="text" placeholder="Search" />
                            <span class="icon is-small has-text-primary is-right">
                              <i class="fas fa-search"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="navbar-item">
                        <div className="buttons">
                          <Link className="button is-white has-text-primary is-medium" to='/cart'>
                            <span class="icon is-small is-left">
                              <i class="fas fa-shopping-cart"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    
                      <div className="navbar-item">
                        <div className="buttons">
                          <Link className="button is-white has-text-primary is-outlined" to='/login'>
                            Login
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

export default Navbar;