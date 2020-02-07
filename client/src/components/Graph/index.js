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
