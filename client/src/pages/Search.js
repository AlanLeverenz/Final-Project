import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import ArticleCard from "../components/ArticleCard";
import ArticlePanel from "../components/ArticlePanel"
import PreviewPanel from "../components/PreviewPanel";
import PreviewCard from "../components/PreviewCard";
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
      previewArticles: [],
      message: "",
      previewHide: "visible"
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  previewNews = () => {
    API.previewNews(this.state.preview)
    .then(res =>{
      console.log(res.data)
      this.setState({
        previewArticles: res.data,
        message: res.data.message,
      })
    })
  }

  searchNews = () => {
    API.searchNews(this.state.search)
    .then(res =>{
      console.log(res.data)
      this.setState({
        articles: res.data,
        message: res.data.message,
        previewHide: "hidden"
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

  // sample put function
  // updateSaveArticle = (id, item) => {
  //   return dispatch => {
  //     console.log(item)
  //     return axios.put(`/locks/${id}`, item).then(response => {
  //         console.log(response)
  //     })
  //   }
  // }

  // eventually need to insert into a Users collection Article array
  // using uuid to set the id since there is no id returned from the search
  handleArticleSave = id => {
    const article = this.state.articles.find(article => article. id === id);
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
      label: article.label,
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
            <Card title="Preview">
              <PreviewPanel>
                {this.state.PreviewArticles.map((preArticle) => (
                  <PreviewCard
                  key={preArticle.id}
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
            </Card>
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
                      label={article.label}
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