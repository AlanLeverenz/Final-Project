// home page

import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Article from "../components/Article";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
// import { Input, FormBtn } from "../components/Form";

class Saved extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    };
  }

  // componentDidMount() {
  //   this.getSavedArticles();
  // }

  getSavedArticles = () => {
    API.getSavedArticles()
      .then(res => {
        this.setState({
          articles: res.data
        })
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
              <h1 className="text-center">
                <strong>NewsIt</strong>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Articles" icon="download">
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <Article
                      source={article.source.name}
                      author={article.author}
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      publishedAt={article.publishedAt}
                      content={article.content}
                      type={article.type}
                      score={article.score}
                      ratio={article.ratio}
                      DeleteBtn={() => (
                        <button
                          onClick={() => this.handleArticleDelete(article._id)}
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
