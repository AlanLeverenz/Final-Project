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
      url: ""
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
          title: "Click on a dot to view the headline",
          url: ""
      })
    })
    .catch(err => console.log(err));
    };

  deleteQuery = (queryId) => {
    console.log("queryId = " + queryId)
    API.deleteQuery(queryId)
      .then(res => this.getSavedQueries())
      .catch(err => console.log(err));
  };
  
  setTitle = (index) => {
    console.log("VISUALS SET TITLE");
    console.log(index);
    this.setState({
      title: this.state.queries[index].title,
      url: this.state.queries[index].url
    })
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
                <h5 className="text-center jumbo-text" style={{fontFamily: "Libre Baskerville, serif, regular"}}>You Have {this.state.queryCount} Articles
                </h5>
                  <div style={{padding:30}}>
                    <span>Positive <i className="fas fa-circle" style={{color:"green"}}></i>
                    &emsp;&emsp; Neutral <i className="fas fa-circle" style={{color:"blue"}}></i>
                    &emsp;&emsp; Negative <i className="fas fa-circle" style={{color:"red"}}></i></span>
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

