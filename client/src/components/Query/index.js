import React from "react";
import "./style.css";

export function Query ({ title, children }) {

    return (
      <div className="graph-header"
        style={{ height: 45, clear: "both", paddingTop: 15, paddingBottom: 25, textAlign: "center" }}
      >
        <h3 style={{fontStyle:"italic"}}>{title}</h3>
        {children}
      </div>
    );
  }

  export function Graph ({ url, padScore, colorScore }) {
    return (

        <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
        >
          <span className="button-hover"><button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i><a target="_blank" rel="noopener noreferrer" href={url}> {padScore}</a></button></span>
        </div>
    );
  }
