import React from "react";
import "./style.css";

export function Graph ({ url, padScore, colorScore }) {
    return (
      <div
        style={{ height: 120, clear: "both", paddingBottom: {padScore}, textAlign: "center" }}
      >
        <span className={colorScore}><a target="_blank" rel="noopener noreferrer" href={url}><i className="fas fa-circle"></i></a></span>
      </div>
    );
  }
  
//   export default Graph;