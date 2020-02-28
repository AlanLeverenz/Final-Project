import React, { Component } from "react";
import { Col, Row } from "../Grid";
import Graph from "../Graph";
import "./style.css";

export class Query extends Component {

  render() {
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
          onClick={this.props.deleteQuery.bind(this, this.props.queries[0].queryId)}
          className="btn btn-danger mt-2"
          >
          Delete
        </button>
        </div>
    );
  }
}

export default Query;
