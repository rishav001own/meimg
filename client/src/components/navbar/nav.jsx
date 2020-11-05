import React from 'react';
import "./navbar.css"

const Nav = () => {
  return (
    <nav>
    <div className="nav-wrapper white">
      <a href="fsg" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Login</a></li>
        <li><a href="badges.html">SignUp</a></li>
        <li><a href="collapsible.html">Profile</a></li>
      </ul>
    </div>
  </nav>
  )
}
export default Nav;
