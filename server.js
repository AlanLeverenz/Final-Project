const express = require("express");
const config = require('config');
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var session = require('express-session')

//logs
app.use(morgan("dev"));

//use sessions for tracking logins
app.use(session({
  name: "__id",
  secret: 'keyboard cat', 
  cookie:{},
  resave: true,
  saveUninitialized: false
}));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//DB Config
// const db = require('./config/keys').mongoURI;
const db = config.get('mongoURI');
//Connect to Mongo
mongoose.connect("mongodb://localhost/mongoSentiment", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/mongoSentiment", 
//   { useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
// .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});