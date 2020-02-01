import React, { Component } from "react";
import "./style.css";

export class Graph extends Component {

  render() {

    return (

        <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
        >
          <span className="button-hover">
            <button className={this.colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i> {this.padScore}</button>
          </span>

        </div>
    )
  }
}

// <button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i><a target="_blank" rel="noopener noreferrer" href={this.url}> {padScore}</a></button>







  // export function Graph ({ url, padScore, colorScore }) {
  //   return (

  //       <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
  //       >
  //         <span className="button-hover"><button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i><a target="_blank" rel="noopener noreferrer" href={url}> {padScore}</a></button></span>
  //       </div>
  //   );
  // }
