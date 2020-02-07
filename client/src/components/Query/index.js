import React, { Component } from "react";
import { Col, Row } from "../Grid";
import Graph from "../Graph";
import "./style.css";

export class Query extends Component {

  // setTitle = () => {
  //   console.log("QUERY SET TITLE");
  //   console.log(this.props.title);
  // }


  render() {

    console.log(this.props.title);
    console.log(this.props.queries);

    return (
      <div className="graph-header"
        style={{ height: 45, clear: "both", paddingTop: 15, paddingBottom: 25, textAlign: "center" }}
      >
        <h3 style={{fontStyle:"italic"}}><a target="_blank" rel="noopener noreferrer" href={this.props.url}>{this.props.title}</a></h3>
        <Row>
          {this.props.queries.slice(0,12).map((query,i) => (
            <Col size="1" key={i}>
              <Graph 
                index={i}
                key={query.key}
                id={query.id}
                queryId={query.queryId}
                url={query.url}
                title={query.title}
                score={query.score}
                padScore={query.padScore}
                colorScore={query.colorScore}
                setTitle={this.props.setTitle}
              />
            </Col>
          ))}
          </Row>

          <button 
          onClick={this.props.deleteQuery.bind(this, this.props.queryId)}
          className="btn btn-danger mt-2"
          >
          Delete
        </button>
        </div>
    );
  }
}

export default Query;

// {children, props}


// import React from "react";
// import "./style.css";

// export function Query ({ title, url, children, props }) {

//   return (
//     <div className="graph-header"
//       style={{ height: 45, clear: "both", paddingTop: 15, paddingBottom: 25, textAlign: "center" }}
//     >
//       <h3 style={{fontStyle:"italic"}}><a target="_blank" rel="noopener noreferrer" href={url}>{title}</a></h3>
//       {children, props}
//     </div>
//   );
// }


// export function Graph ({ padScore, colorScore }) {
//   return (

//       <div className="graph-div" style={{ height: 280, position:"relative", clear:"both", textAlign:"center" }}
//       >
//         <span className="button-hover"><button className={colorScore} style={{border:"none",padding:3}}><i className="fas fa-circle"></i> {padScore}</button></span>
//       </div>
//   );
// }

//   <button
//   onClick={() => deleteQuery(queryId)}
//   className="btn btn-danger ml-2"
// >
//   Delete
// </button>

// <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>