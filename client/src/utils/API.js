import axios from "axios";

const xhrHeader = {
  headers: {
    xhrFields: {
      withCredentials: true
    }
  }
};

export default {
  // Gets all articles
  getArticles: function () {
    return axios.get("/api/article");
  },
  // Gets the book with the given id
  getArticle: function (id) {
    return axios.get("/api/article/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function (articleData) {
    return axios.post("/api/article", articleData);
  },
  loginUser: function (user) {
    return axios.post("/api/user/", user, xhrHeader)
  },
  signup: function (user) {
    return axios.post("/api/user/signup", user, xhrHeader)
  },
  authenticateUser: function () {
    return axios.post("/api/user/authenticate/", xhrHeader)
  },

  // search news using query (hand to server to get newsapi/twinwords results)
  searchNews: function(query) {
      console.log("CLIENT: API searchNews: " + query);
      return axios.get("/api/news/" + query)
  }

};
