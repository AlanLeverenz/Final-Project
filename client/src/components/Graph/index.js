<<<<<<< HEAD
import React, { Component } from "react";
import "./style.css";

export class Graph extends Component {

  render() {

    return (

      <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
      >
        <span className="button-hover">
          <button onClick={this.props.setTitle.bind(this, this.props.index)} className={this.props.colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i> {this.props.padScore}</button>
        </span>

      </div>
    )
  }
}

export default Graph;
=======

import React from "react";
import "./style.css";

  export default function Graph ({ url, padScore, colorScore }) {
    return (

        <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
        >
          <span className="button-hover"><button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i><a target="_blank" rel="noopener noreferrer" href={url}> {padScore}</a></button></span>
        </div>
    );
  }


// import React, { Component } from "react";
// import "./style.css";
// export class Graph extends Component {
//   render() {
//     return (
//         <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
//         >
//           <span className="button-hover">
//             <button className={this.colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i> {this.padScore}</button>
//           </span>
//         </div>
//     )
//   }
// }

// <button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i><a target="_blank" rel="noopener noreferrer" href={this.url}> {padScore}</a></button>
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
