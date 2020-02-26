import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import ArticleCard from "../components/ArticleCard";
import ArticlePanel from "../components/ArticlePanel"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

// Search page
class Search extends Component {

  constructor(props) {
  super(props)
  
    this.state = {
      search: "",
      articles: [],
      queries: [],
      message: "",
      isLoaded: true,
      queryId: "",
      email: ""
    };
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the NewsAPI for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      isLoaded:false,
      // search: this.state.search /* added */
    });
    this.searchNews();
  };

  searchNews = () => {
    API.searchNews(this.state.search)
    .then(res => {
      console.log(res.data)
      this.setState({
        isLoaded: true,
        articles: res.data,
        queryId: res.data[0].queryId,
        message: res.data.message
      })}
    )
    // .then(res => this.handleQueryUpdate())
    .then(res => { console.log("HANDLE QUERY UPDATE")
    })
    .catch(() =>
      this.setState({
        articles: [],
        isLoaded: true,
        message: "No Articles Found. Try a Different Search"
      })
    );
  };

  // need function that uses the queryId from a hi-med-lo article, to get the query string and user email, and adds them to all the queries that have the same queryId


// let query = {'username': req.user.username};
// req.newData.username = req.user.username;

// MyModel.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
//     if (err) return res.send(500, {error: err});
//     return res.send('Succesfully saved.');
// });

// indirect update

  handleQueryUpdate = () => {
    const id = this.state.queryId;
    API.getSavedQuery(id)
    .then(res => console.log(res.data)
    )
    // .then(res => {
    //   res.data.map((query) => (
    //   query.email = this.props.state.email,
    //   query.query = this.state.search
    //     ))
    //   API.updateQueries(this.query._id, this.query)
    // .then(res => console.log("handle query update"))
    .catch((err) =>
    this.setState({
      message: err
    }))
  }
  // )
  // }


// direct update
  // handleQueryUpdate = () => {
  //   const id = this.state.queryId;
  //   const myEmail = this.props.state.email;
  //   const myQuery = this.state.search;
  //   const myData = [{ 
  //     email: myEmail, 
  //     query: myQuery
  //   }];

  //   console.log("myEmail = " + myEmail);
  //   console.log("myQuery = " + myQuery);
  //   console.log(myData);
  //   console.log("queryId = " + this.state.queryId);
  //   API.updateQueries(id, myData)
  //   .then(res => console.log("handleQueryUpdate complete"))
  //   .catch((err) =>
  //   this.setState({
  //     message: err
  //   })
  // )};


  handleArticleSave = id => {
    const article = this.state.articles.find(article => article.id === id);
    API.saveArticle({
      id: article.id,
      key: article.id,
      query: this.state.search,
      queryId: article.queryId,
      email: this.props.state.email,
      author: article.author,
      source: article.source,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
      content: article.content,
      label: article.label,
      score: article.score,
      padScore: article.padScore,
      hml: article.hml,
      saved: true
    }).then(() => console.log("handleSaveArticle complete"));
  };
  
  render() {
    // console.log("PROPS EMAIL: " + this.props.state.email)
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <div className="jumbo-text">
                <h1 className="text-center jumbo-text" style={{fontSize: "4rem"}}>
                News Polarizer
                </h1>

                <h5 className="text-center jumbo-text">Search the full spectrum of spin on any news headline.
                </h5>
              </div>

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
            <Card isLoaded={this.state.isLoaded}>
              {this.state.articles.length ? (
                <ArticlePanel>
                  {this.state.articles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      id={article.id}
                      queryId={article.id}
                      email={this.props.state.email}
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
                      padScore={article.padScore}
                      hml={article.hml}
                      // Button={() => (
                      //   <button
                      //     onClick={() => this.handleArticleSave(article.id)}
                      //     className="btn btn-primary ml-2"
                      //   >
                      //     Save
                      //   </button>
                      // )}
                      Button={() => (
                        <button
                          onClick={() => this.handleQueryUpdate()}
                          className="btn btn-primary ml-2"
                        >
                          Update
                        </button>
                      )}
                    />
                  ))}
                </ArticlePanel>
              )
            : (
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

