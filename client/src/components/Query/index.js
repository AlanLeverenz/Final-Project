import React from "react";
// import React, { Component } from "react";
// import Graph from "../Graph"
import "./style.css";

// convert to a class component
// get prop for onClick function 

export function Query ({ title, url, children }) {

  return (
    <div className="graph-header"
      style={{ height: 45, clear: "both", paddingTop: 15, paddingBottom: 25, textAlign: "center" }}
    >
      <h3 style={{fontStyle:"italic"}}><a target="_blank" rel="noopener noreferrer" href={url}>{title}</a></h3>

      {children}
    </div>
  );
}



export function Graph ({ url, padScore, colorScore }) {
  return (

      <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
      >
        <span className="button-hover"><button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i> {padScore}</button></span>
      </div>
  );
}

//   <button
//   onClick={() => deleteQuery(queryId)}
//   className="btn btn-danger ml-2"
// >
//   Delete
// </button>

// <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>