import React from 'react';
import "./login.css"
import {Link} from 'react-router-dom'

const login = () => {
    return (
        <div className="login_card">
            <div className='card auth-card'>
                <h2>MeImg</h2>
                <h4>Waiting To See You In</h4>
                <div className="e_mail">
                    <input
                    id="email"
                    type="email"
                    placeholder="Input your E-mail here"
                    className="validate"/>
                </div>
                <div className="passwords">
                    <input
                    id="password"
                    type="password"
                    placeholder="Enter your Password here"
                    className="validate"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Login
                    <i className="material-icons right">login</i>
                </button>
                <h5>
                    <Link to="/signup">Don't Have Account</Link>
                </h5>
            </div>
        </div>
    );
};

export default login;