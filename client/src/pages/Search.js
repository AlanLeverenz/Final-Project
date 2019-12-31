import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import Articles from "../pages/Articles";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search 
  // componentWillMount() {
  //   this.searchNews("impeachment");
  // }

  searchNews = query => {
    console.log(query);
    API.searchNews(query)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

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
    this.searchNews(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />

        {/* {this.props.state.authenticated 
          ? <Articles auth/>
          : <Articles />} */}
        
      </div>
    );
  }
}

export default Search;