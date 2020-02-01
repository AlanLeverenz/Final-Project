
import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar({authenticated, user, logout}) {

  return ( 

    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
      <Link className="navbar-brand" style={{fontFamily:"Montserrat, sans-serif", letterSpacing:"0.2em", fontSize:"2rem", marginBottom:"0.5rem"}} to="/">
        <span>NewsIt</span>
      </Link>

      <div>
        <ul className="navbar-nav" style={{fontFamily:"century-old-style-std, serif", fontSize:"0.75rem"}}>

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
              to="/demo"
              className={
                window.location.pathname === "/demo" ? "nav-link active" : "nav-link"}
            >
              About Us
            </Link>
          </li>

          {
            authenticated ?
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
          : null  }

          {
            authenticated ?
          <li className="nav-item">
            <Link
              to="/visuals"
              className={window.location.pathname === "/visuals" ? "nav-link active" : "nav-link"}
            >
              Visuals
            </Link>
          </li>
          : null  }

          { 
            !authenticated ? 
            <li className="nav-item">
              <Link
                to="/login"
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
              >
                Login
              </Link>
            </li>
            : null }

          {
            !authenticated ? 
            <li className="nav-item">
              <Link
                to="/signup"
                className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
              >
                Sign Up
              </Link>
            </li>
          : null }

          {
            authenticated ? 
          <li>{user}</li>
          : null }

          {
            authenticated ?
          <li className="nav-item">
            <Button className="nav-link" onClick={logout}>
              Logout
            </Button>
          </li>
          : null }

        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
