// home page

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Article from "../components/Article";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getSavedArticles()
      .then(res => {
        console.log(res.data);
        this.setState({
          articles: res.data
        }, () => {console.log(this.state.articles)})
      }
    )
    .catch(err => console.log(err));
  };

  handleArticleDelete = id => {
    API.deleteArticle(id)
      .then(res => this.getSavedArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <row className="jumbo-text">
            <h1 className="text-center jumbo-text" style={{fontFamily: "Libre Baskerville, serif"}}>
             News Polarizer
              </h1>
              <h5 className="text-center jumbo-text" style={{fontFamily: "Libre Baskerville, serif, regular"}}>Your Saved News Polarizer Articles.
              </h5>
            </row>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Articles" icon="download">
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map((article) => (
                    <Article
                      _id = {article._id}
                      id={article.id}
                      key={article.key}
                      query={article.query}
                      source={article.source}
                      author={article.author}
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage}
                      publishedAt={article.publishedAt}
                      content={article.content}
                      type={article.type}
                      score={article.score}
                      hml={article.score}
                      Button={() => (
                        <button
                          onClick={() => this.handleArticleDelete(article.id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Articles</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
