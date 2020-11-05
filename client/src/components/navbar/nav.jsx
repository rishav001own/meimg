import React from 'react';
import "./navbar.css"

const Nav = () => {
  return (
    <nav>
    <div className="nav-wrapper white">
      <a href="/" className="brand-logo"> MeImg</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">SignUp</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </div>
  </nav>
  )
}
export default Nav;
