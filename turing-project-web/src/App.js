import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import Navbar from './Components/Navbar';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import Contact from './Components/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar/>

          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/contact-us' component={Contact}/>

          <footer className="footer sticky-footer has-background-primary">
            <section className="section  has-text-weight-bold 	">
              <div className="container">
                <h6 className="title has-text-white has-text-centered">Footer</h6>
              </div>
            </section>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
