import React from "react";
import "./style.css";


export function PreviewPanel({ children }) {
    return (
      <div className="container">
        <ul className="list-group list-row">{children}</ul>
      </div>
    );
  }
export default PreviewPanel;