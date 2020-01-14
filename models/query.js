const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: { index: { unique: true }}
    },
    key: {
        type: String,
        required: false,
    },
    userId: {
        type:String,
        required: false
    },
    query: {
        type: String,
        required: false,
    },
    date: {
    type: Date,
    default: Date.now
    },

  // array of articles
  article: [ 
    { 
        id: { 
            type: String,
            required: false
        }
    },
    {
        label: {
            type: String,
            required: false
        }
    },
    {
        score: {
            type: Number,
            required: false
        }
    },
    {
        hml: {
            type: String,
            required: false
        }
    },
    {
        title: {
            type: String,
            required: false
        }
    },
    {
        url: {
            type: String,
            required: true
        }
    },
    {
        urlToImage: {
            type: String,
            required: false
        }
    },
    {
        publishedAt: {
            type: Date,
            required: false
        }
    },
    {
        description: {
            type: String,
            required: false
        }
    } 
]    
});

const Query = mongoose.model("Query", articleSchema);

module.exports = Query;


