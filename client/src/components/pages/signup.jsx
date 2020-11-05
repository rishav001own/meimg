import React from 'react';
import './signup.css'
const signup = () => {
    return (
        <div className="signup_card">
            <div className='card signup-card'>
                <h2>MeImg</h2>
                <h4>Create Account and Join Us</h4>
                <div className="name">
                    <input
                    id="name"
                    type="text"
                    placeholder="Full Name"/>
                </div>
                <div className="e_mail">
                    <input
                    id="email"
                    type="email"
                    placeholder="Input your E-mail here"
                    className="validate"
                    />
                    <span class="helper-text" data-error="wrong" data-success="right"></span>
                </div>
                <div className="passwords">
                    <input
                    id="password"
                    type="password"
                    placeholder="Enter your Password here"
                    className="validate"/>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Login
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    );
};

export default signup;