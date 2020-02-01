import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", paddingTop: 120, paddingBottom: 120, textAlign: "center" }}
      className="jumbotron jumbotron-fluid clearfix"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
