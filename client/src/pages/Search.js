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



// Home page
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
      previewArticles: []
    };
  }

  // componentWillMount() {
  //   this.deleteSavedQueries();
  // }

  // deleteSavedQueries = () => {
  //   API.deleteSavedQueries(this.state.queryId)
  //   .then(res => console.log("SEARCH PAGE ======= " + this.state.queryId)
  //   );
  // }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  previewNews = () => {
    API.runPreview(this.state.preview)
    .then(res =>{
      console.log(res.data)
      this.setState({
        previewArticles: res.data,
        message: res.data.message,
      })
    })
  }
  componentDidMount = () => {
    this.previewNews();
  }

  searchNews = () => {
    this.setState({
      previewArticles: []
    })
    API.searchNews(this.state.search)
    .then(res => {
      this.setState({
        isLoaded: true,
        articles: res.data,
        message: res.data.message,
        
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
    this.setState({isLoaded:false});
    this.searchNews();
  };

  // eventually need to insert into a Users collection Article array
  // using uuid to set the id since there is no id returned from the search
  handleArticleSave = id => {
    const article = this.state.articles.find(article => article.id === id);
    API.saveArticle({
      id: article.id,
      key: article.id,
      query: this.state.search,
      queryId: article.queryId,
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
              )

            //   <Row>
            //   {this.state.queries.map((query,i) => (
            //     <Col size="1" key={i}>
            //       <Graph 
            //         key={query.key}
            //         id={query.id}
            //         qid={query.queryId}
            //         url={query.url}
            //         score={query.score}
            //         padScore={query.padScore}
            //         colorScore={query.colorScore}
            //       />
            //     </Col>
            //   ))}
            // </Row>

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