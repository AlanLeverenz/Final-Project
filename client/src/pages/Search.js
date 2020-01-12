import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import ArticleCard from "../components/ArticleCard";
import ArticlePanel from "../components/ArticlePanel"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

// const uuidv4 = require('uuid/v4');

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
    API.searchNews(this.state.search)
    .then(res =>{
      console.log(res.data)
      this.setState({
        articles: res.data,
        message: res.data.message
      })}
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
  // using uuid to set the id since there is no id returned from the search
  handleArticleSave = id => {
    const article = this.state.articles.find(article => article.id === id);
    console.log(id)
    API.saveArticle({
      id: article.id,
      key: article.id,
      query: this.state.search,
      author: article.author,
      source: article.source.name,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
      type: article.label,
      score: article.score,
      hml: article.hml
    }).then(() => console.log("handleSaveArticle complete"));
  };
  
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <row className="jumbo-text">
              <h1 className="text-center jumbo-text" style={{fontSize: "4rem"}}>
               News Polarizer
                </h1>
                <h5 className="text-center jumbo-text">Search the full spectrum of spin on any news headline.
                </h5>
              </row>
  
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
                <ArticlePanel>
                  {this.state.articles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      id={article.id}
                      source={article.source.name}
                      author={article.author}
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage}
                      publishedAt={article.publishedAt}
                      content={article.content}
                      keywords={article.keywords}
                      type={article.label}
                      score={article.score}
                      hml={article.hml}
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
                </ArticlePanel>
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