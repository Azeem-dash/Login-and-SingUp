import React from "react";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Logo
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/singup">SingUp</Link>
          </li>
          <li>
            <button className="btn red">logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
