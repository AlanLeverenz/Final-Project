import React from "react";
import "./style.css";


export function ArticlePanel({ children }) {
    return (
      <div className="container">
        <ul className="list-group">{children}</ul>
      </div>
    );
  }
export default ArticlePanel;
