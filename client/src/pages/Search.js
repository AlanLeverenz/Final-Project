import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import Article from "../components/Article";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// Home page
class Search extends Component {

  constructor(props) {
  super(props)
  
    this.state = {
      search: "",
      articles: [],
      message: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  searchNews = () => {
    console.log(this.state.search);
    API.searchNews(this.state.search)
    .then(res =>
      // console.log(res.data)
      this.setState({
        articles: res.data
      })
    )
    .catch(() =>
      this.setState({
        articles: [],
        message: "No Articles Found. Try a Different Search"
      })
    );
  };


  // When the form is submitted, search the NewsAPI for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNews();
  };

  // eventually need to insert into a Users collection Article array
  handleArticleSave = id => {
    const article = this.state.articles.find(article => article.id === id);

    API.saveArticle({
      // id: article.id,
      key: article.key,
      query: article.query,
      source: article.source.name,
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
      content: article.content,
      type: article.type,
      score: article.score,
      ratio: article.ratio,
      keywords: [ { word: article.keywords.word}, 
        { score: article.keywords.score }
      ],
    }).then(() => this.getSavedArticles());
    // }).then(() => console.log(article.json));
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
              <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                search={this.state.search}
              />
            </Jumbotron>
          </Col>         
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map((article, index) => (
                    <Article
                      key={index}
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
                      Button={() => (
                        <button
                          onClick={() => this.handleArticleSave(article.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
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

export default Search;