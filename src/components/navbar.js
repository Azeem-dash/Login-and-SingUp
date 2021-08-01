import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

import { Link } from "react-router-dom";
export default function Navbar({ user }) {
  const history = useHistory();
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to="/"
          onClick={() => {
            if (user) {
              history.push("/");
            } else {
              history.push("/login");
            }
          }}
          className="brand-logo left"
        >
          Logo
        </Link>
        <ul id="nav-mobile" className="right">
          {user ? (
            <li>
              <button
                className="btn red"
                onClick={() => {
                  auth.signOut();
                  history.push("/login");
                }}
              >
                logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/singup">SingUp</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
