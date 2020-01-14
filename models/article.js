const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  // id
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
  // userId 
  userId: {
    type:String,
    required: false
  },
  // query, a string
  query: {
    type: String,
    required: false,
  },
  // article source id and name
  source: { 
    id: { 
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
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
  label: {
    type: String,
    required: false
  },
    // score
  score: {
    type: Number,
    required: false
  },
  // hml
  hml: {
    type: String,
    required: false
  },
  // ratio
  ratio: {
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
    default: false
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;


