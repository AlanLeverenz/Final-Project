import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import PreviewPanel from "../components/PreviewPanel";
import PreviewCard from "../components/PreviewCard";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

// Preview page
class Preview extends Component {

  constructor(props) {
  super(props)
  
    this.state = {
      message: "",
      isLoaded: true,
      previewArticles: []
    };
  }

  previewNews = () => {
    API.runPreview(this.state.preview)
    .then(res =>{
      console.log(res.data)
      this.setState({
        isLoaded: true,
        previewArticles: res.data,
        message: res.data.message,
      })
    })
  }
  componentDidMount = () => {
    this.previewNews();
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

                <h5 className="text-center jumbo-text">Today's headlines</h5>
              </div>

            </Jumbotron>
          </Col>
        </Row>
        <Row style={{visible:this.state.previewHide}}>
          <Col size="md-12">
            <Card title="Preview">
            {this.state.previewArticles.length ? (

              <PreviewPanel>
                {this.state.previewArticles.map((preArticle, i) => (
                  <PreviewCard
                  key={i}
                  id={preArticle.id}
                  source={preArticle.source.name}
                  author={preArticle.author}
                  title={preArticle.title}
                  description={preArticle.description}
                  url={preArticle.url}
                  urlToImage={preArticle.urlToImage}
                  publishedAt={preArticle.publishedAt}
                  content={preArticle.content}
                  ></PreviewCard>
                ))};
              </PreviewPanel>
             ) : (
              <h2 className="text-center">{this.state.message}</h2>
            )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Preview;
