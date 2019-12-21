const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleschema = new Schema({
  // query
  query: {
    type: String,
    required: false,
    unique: { index: { unique: true }}
  },
  // headline, a string, must be entered
  author: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // title, a string, must be entered
  title: {
    type: String,
    required: false
  },
  // url to article, a string, must be entered
  url: {
    type: String,
    required: true
  },
  // image url
  urlToImage: {
    type: String,
    required: false
  },
  // published date
  publishedAt: {
    type: Date,
    required: false
  },
  // description
  description: {
    type: String,
    required: false
  },
  // content
  content: {
    type: String,
    required: false
  },
  // type
  type: {
    type: String,
    required: false
  },
    // score
score: {
  type: String,
  required: false
},
  // ratio
  ratio: {
    type: String,
    required: false
  },
  // keywords
  keywords: [
    { 
    word: String, 
    score: Number
  }
],
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

const Article = mongoose.model("Article", articleschema);

module.exports = Article;


