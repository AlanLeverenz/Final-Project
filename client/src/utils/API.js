import axios from "axios";

const xhrHeader = {
  headers: {
    xhrFields: {
      withCredentials: true
    }
  }
};

export default {
  // search news using query (hand to server to get newsapi/twinwords results)
  searchNews: function(search) {
    console.log("CLIENT API search: " + search);
    return axios.get("/api/news/" + search)
  },

  runPreview: function() {
    console.log("Searching Preview Articles");
    return axios.get("api/preview/")
  },

  // Gets the article with the given id (for details page)
  getSavedArticle: function (id) {
    return axios.get("/api/article/" + id);
  },
  
  // Gets saved articles
  getSavedArticles: function(id) {
    return axios.get("/api/articles/" + id);
  },

  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },

  // updates the article with the given id
  updateArticle: function (id, articleData) {
    return axios.put("/api/articles/" + id, articleData);
  },
  
  // Saves an article to the database
  saveArticle: function (articleData) {
    console.log("SAVE ARTICLE DATA ====")
    console.log(articleData);
    return axios.post("/api/articles", articleData);
  },

// queries

  // Get all saved queries
  getSavedQueries: function() {
    return axios.get("/api/queries");
  },

  getSavedQuery: function(id) {
    return axios.get("api/queries/" + id);
  },

  // Deletes articles with the given id
  deleteQuery: function (id) {
    return axios.delete("/api/queries/" + id);
  },

  // update queries
  updateQueries: function(id, queryData) {
    console.log("UPDATE QUERIES ====")
    return axios.put("/api/queries/" + id, queryData );
  },

// user function
  loginUser: function (user) {
    return axios.post("/api/user/login", user, xhrHeader)
  },

  signup: function (user) {
    return axios.post("/api/user/signup", user, xhrHeader)
  },

  authenticateUser: function () {
    return axios.post("/api/user/authenticate/", xhrHeader)
  }

};

