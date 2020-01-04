
import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return ( 
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        NewsIt
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
          <li className="nav-item" class="no-auth">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item" class="no-auth">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>

          {/* A cleaner version */}
          {/* {
            props.authenticated &&            
            <li className="nav-item" id="logout">
            <Button className="nav-link" onClick={props.logout}>
              Logout
            </Button>
          </li>
          } */}

{           
            props.authenticated ? (            
            <li className="nav-item">
            <Button className="nav-link" onClick={props.logout}>
              Logout
            </Button>
          </li>) : null
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
