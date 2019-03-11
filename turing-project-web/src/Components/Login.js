import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    
    render() {
        return (
            <section className="section">
                <div className="container">
                  <div className="columns">
                    <div className="column is-one-third is-offset-one-third">
                      <div className="field">
                        <label class="label">Email</label>
                        <p className="control has-icons-left">
                          <input className="input  max-width-500" type="email" placeholder="Email" />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                          </span>
                          
                        </p>
                      </div>
                      <div className="field">
                        <label class="label">Password</label>
                        <p className="control has-icons-left">
                          <input className="input  max-width-500" type="password" placeholder="Password" />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <button className="button is-danger full-width max-width-500">
                            Login
                          </button>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <Link className="button is-white has-text-primary is-outline full-width max-width-500" to="/signup">
                            New to T-SHOP? Sign up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        );
    }
}

export default Login;