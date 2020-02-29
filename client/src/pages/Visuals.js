import React, { Component } from "react";
import { Query } from "../components/Query";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Visuals extends Component {

  constructor(props) {
  super(props)

    this.state = {
      queries: [],
      queryCount: 0,
      title: "",
      url: "",
      start: 0,
      end: 12
    };
  }

  componentDidMount() {
    this.getSavedQueries();
  }

  getSavedQueries = () => {
    API.getSavedQueries()
      .then(res => {
        console.log("getSavedQueries ==== ");
        console.log(res.data);
        this.setState({
          queries: res.data,
          queryCount: res.data.length,
          title: "Click on a dot to view its headline",
          url: "",
      })
    })
    .catch(err => console.log(err));
    };

  deleteQuery = (queryId) => {
    API.deleteQuery(queryId)
      .then(res => this.getSavedQueries())
      .catch(err => console.log(err));
  };
  
  setTitle = (index) => {
    this.setState({
      title: this.state.queries[index].title,
      url: this.state.queries[index].url
    })
  }

  getNextQuerySet = () => {
    (this.state.end / 12 < this.state.queryCount / 12) && (
    this.setState({
      start: this.state.start + 12,
      end: this.state.start + 24
    }))
  }

  getPreviousQuerySet = () => {
    (this.state.start > 11) && (
    this.setState({
      start: this.state.start - 12,
      end: this.state.start 
    }))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <div className="jumbo-text">
                <h1 className="text-center jumbo-text" style={{fontSize: "4rem"}}>
                  News Polarizer
                </h1>
                <h5 className="text-center jumbo-text" style={{fontFamily: "Libre Baskerville, serif, regular"}}>There are {this.state.queryCount / 12} search pages
                </h5>
                <div style={{padding:30}}>
                  <span>Positive <i className="fas fa-circle" style={{color:"green"}}></i>
                  &emsp;&emsp; Neutral <i className="fas fa-circle" style={{color:"blue"}}></i>
                  &emsp;&emsp; Negative <i className="fas fa-circle" style={{color:"red"}}></i></span>
                </div>

                <div>
                  <span className="button-hover">
                    <button onClick={this.getPreviousQuerySet.bind(this, this.state.queryCount)} style={{fontSize:36, border:"none"}}><i className="fas fa-angle-left"></i></button>
                  </span>

                  <span style={{fontSize:36}}>{this.state.end / 12}</span>

                  <span className="button-hover">
                    <button onClick={this.getNextQuerySet.bind(this, this.state.queryCount)} style={{fontSize:36, border:"none"}}><i className="fas fa-angle-right"></i></button>
                  </span>
                </div>
              </div>
            </Jumbotron>
          </Col>
        </Row>

        {this.state.queryCount ? (
        // query graphs
          <div style={{textAlign:"center"}}>
            <Query queries={this.state.queries}
            title={this.state.title} 
            url={this.state.url}
            start={this.state.start}
            end={this.state.end}
            setTitle={this.setTitle}
            deleteQuery={this.deleteQuery}
            />
          </div>
        ) 
        : (
        <h2 className="text-center">No Saved Queries</h2>
        )}
    </Container>
    )
  }
}

export default Visuals;

