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
    return axios.post("/api/news/" + search)
  },

  // Gets the article with the given id (for details page)
  getSavedArticle: function (id) {
    return axios.get("/api/article/" + id);
  },
  
  // Gets saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },

  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },

  loginUser: function (user) {
    return axios.post("/api/user/", user, xhrHeader)
  },

  signup: function (user) {
    return axios.post("/api/user/signup", user, xhrHeader)
  },

  authenticateUser: function () {
    return axios.post("/api/user/authenticate/", xhrHeader)
  }

};
