const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  // set by uuid
  id: {
    type: String,
    required: true,
    unique: { index: { unique: true }}
  },
  // key
  key: {
    type: String,
    required: false,
  },
  // query, a string
  query: {
    type: String,
    required: false,
  },
  // article source
  source: { 
    type: String
  },
  // headline, a string
  author: {
    type: String,
    required: false
  },
  // title, a string
  title: {
    type: String,
    required: false
  },
  // url to article
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
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: true
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;


