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
    label: {
        type: String,
        required: false
    },
    score: {
        type: Number,
        required: false
    },
    hml: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    }, 
});

const Query = mongoose.model("Query", querySchema);

module.exports = Query;


