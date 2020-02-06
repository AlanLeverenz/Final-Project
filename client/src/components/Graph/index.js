import React, { Component } from "react";
import "./style.css";

export class Graph extends Component {

  // setTitle = () => {
  //   console.log("GRAPH SET TITLE");
  //   console.log(this.props.title);
  //   console.log(this.props.url);
  // }

  render() {

    return (

      <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
      >
        <span className="button-hover">
          <button onClick={this.setTitle} className={this.props.colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i> {this.props.padScore}</button>
        </span>

      </div>
    )
  }
}

// <button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i><a target="_blank" rel="noopener noreferrer" href={this.url}> {padScore}</a></button>

// import React from "react";
// import "./style.css";

//   export function Graph ({ url, padScore, colorScore }) {
//     return (

//         <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
//         >
//           <span className="button-hover">
//             <button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i><a target="_blank" rel="noopener noreferrer" href={url}> {padScore}</a></button></span>
//         </div>
//     );
//   }
