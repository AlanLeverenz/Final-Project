const mongoose = require("mongoose");
const db = require("../models");

// This file empties the articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI ||
"mongodb://localhost/mongoSentiment"
// "mongodb://localhost/reactarticlelist"
);

const articleseed = [
  {
  "key": "1",
  "source": {
  "id": "the-new-york-times",
  "name": "The New York Times"
  },
  "author": "twinword inc.",
  "title": "The Articles of Impeachment",
  "description": "House Democrats appear united in their charge that the president abused his power and obstructed Congress. Behind the scenes, this wasn’t always the case.",
  "url": "https://www.nytimes.com/2019/12/11/podcasts/the-daily/impeachment.html",
  "urlToImage": "https://static01.nyt.com/images/2019/12/10/us/politics/11thedaily_impeach/10dc-impeach1-sub-facebookJumbo.jpg",
  "publishedAt": "2019-12-11T11:02:38Z",
  "content": "Nicholas Fandos contributed reporting.\r\nThe Daily is made by Theo Balcomb, Andy Mills, Lisa Tobin, Rachel Quester, Lynsea Garrison, Annie Brown, Clare Toeniskoetter, Paige Cowett, Michael Simon Johnson, Brad Fisher, Larissa Anderson, Wendy Dorr, Chris Wood, J… [+458 chars]",
  "type": "neutral",
  "score": -0.0019391356666667,
  "ratio": -0.01490868337348,
  "keywords": [
  {
  "word": "make",
  "score": 0.192192596
  },
  {
  "word": "daily",
  "score": -0.126476981
  },
  {
  "word": "mill",
  "score": -0.071533022
  }
  ],
  "version": "4.0.0",
  "email": "help@twinword.com",
  "result_code": "200",
  "result_msg": "Success"
  },

  {
    "key": "2",
  "source": {
  "id": "the-new-york-times",
  "name": "The New York Times"
  },
  "author": "twinword inc.",
  "title": "Trump Blocked Key Impeachment Witnesses. Should Congress Wait?",
  "description": "At the first House Judiciary Committee impeachment hearing, Republicans’ witness said lawmakers were rushing impeachment and should instead let court fights over access to witnesses play out.",
  "url": "https://www.nytimes.com/2019/12/04/us/politics/turley-impeachment.html",
  "urlToImage": "https://static01.nyt.com/images/2019/12/04/us/politics/04dc-assess-sub/04dc-assess-sub-facebookJumbo.jpg",
  "publishedAt": "2019-12-04T19:30:36Z",
  "content": "Much of the evidence the House uncovered in its inquiry was from witnesses who largely were a degree of separation removed from Mr. Trump himself. As a result, they were unable to say whether the president ever directly and explicitly said he was conditioning… [+1707 chars]",
  "type": "neutral",
  "score": 0.043309538,
  "ratio": 0.26217377593578,
  "keywords": [
  {
  "word": "say",
  "score": 0.235845868
  },
  {
  "word": "result",
  "score": 0.152059727
  },
  {
  "word": "condition",
  "score": 0.152059727
  },
  {
  "word": "witness",
  "score": 0.13424713
  },
  {
  "word": "much",
  "score": 0.117922934
  },
  {
  "word": "unable",
  "score": -0.366912147
  },
  {
  "word": "degree",
  "score": -0.096144741
  }
  ],
  "version": "4.0.0",
  "email": "help@twinword.com",
  "result_code": "200",
  "result_msg": "Success"
  },

  {
    "key": "3",
    "source": {
  "id": "cnn",
  "name": "CNN"
  },
  "author": "Analysis by Zachary B. Wolf, CNN",
  "title": "Analysis: Trump is so much closer to impeachment",
  "description": "Articles of impeachment -- House Speaker Nancy Pelosi moved the House much closer to impeachment Thursday when she officially directed the Judiciary Committee to draw up articles of impeachment. (As if it wasn't already.)",
  "url": "https://www.cnn.com/2019/12/06/politics/impeachment-watch-december-5/index.html",
  "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190925114408-trump-pelosi-super-tease.jpg",
  "publishedAt": "2019-12-06T05:00:38Z",
  "content": null,
  "result_code": "415",
  "result_msg": "Does not look like a valid request"
  },

  {
    "key": "4",
    "source": {
  "id": "the-new-york-times",
  "name": "The New York Times"
  },
  "author": "twinword inc.",
  "title": "Will Impeachment Drive Trump Batty?",
  "description": "Check the belfry. Maybe things could get worse.",
  "url": "https://www.nytimes.com/2019/12/18/opinion/trump-house-impeachment.html",
  "urlToImage": "https://static01.nyt.com/images/2019/12/19/opinion/19impeach_editorial_4/19impeach_editorial_4-facebookJumbo.jpg",
  "publishedAt": "2019-12-19T02:33:25Z",
  "content": "The Salem theme is never going away. On Wednesday Trump sent an email to supporters whining that No President ever could have endured or passed this many witch hunts. The missive ended, of course, with a request for cash. (Before the upcoming vote, I want to … [+1731 chars]",
  "type": "neutral",
  "score": 0.00518990525,
  "ratio": -0.062918131086224,
  "keywords": [
  {
  "word": "supporter",
  "score": 0.568123809
  },
  {
  "word": "have",
  "score": -0.162909152
  },
  {
  "word": "send",
  "score": 0.152059727
  },
  {
  "word": "request",
  "score": 0.152059727
  },
  {
  "word": "theme",
  "score": 0.117922934
  },
  {
  "word": "vote",
  "score": 0.117922934
  },
  {
  "word": "want",
  "score": 0.105914505
  },
  {
  "word": "whine",
  "score": -0.783592198
  },
  {
  "word": "no",
  "score": -0.217959174
  },
  {
  "word": "going",
  "score": -0.162909152
  },
  {
  "word": "witch",
  "score": -0.162909152
  },
  {
  "word": "away",
  "score": -0.071533022
  }
  ],
  "version": "4.0.0",
  "email": "help@twinword.com",
  "result_code": "200",
  "result_msg": "Success"
  },

  {
    "key": "5",
  "source": {
  "id": "the-new-york-times",
  "name": "The New York Times"
  },
  "author": "twinword inc.",
  "title": "What’s Different About This Impeachment",
  "description": "It’s not the offense, but rather one party’s rejection of reality.",
  "url": "https://www.nytimes.com/2019/12/14/opinion/sunday/republicans-impeachment.html",
  "urlToImage": "https://static01.nyt.com/images/2019/12/15/opinion/15kristof/15kristof-facebookJumbo.jpg",
  "publishedAt": "2019-12-14T19:30:09Z",
  "content": "Republicans say that the impeachment of President Bill Clinton was different because he committed the crime of perjury, even if only about sex. But thats not clear: A 33-page article in 2004 in the Chicago-Kent Law Review concluded that Clinton misled a grand… [+2285 chars]",
  "type": "negative",
  "score": -0.10764650019048,
  "ratio": -0.24773486475386,
  "keywords": [
  {
  "word": "grand",
  "score": 0.973743186
  },
  {
  "word": "law",
  "score": 0.467771937
  },
  {
  "word": "different",
  "score": 0.192192596
  },
  {
  "word": "committed",
  "score": 0.137689844
  },
  {
  "word": "say",
  "score": 0.117922934
  },
  {
  "word": "review",
  "score": 0.117922934
  },
  {
  "word": "even",
  "score": 0.110309706
  },
  {
  "word": "crime",
  "score": -0.986023527
  },
  {
  "word": "mislead",
  "score": -0.959783216
  },
  {
  "word": "clear",
  "score": -0.648766473
  },
  {
  "word": "not",
  "score": -0.625
  },
  {
  "word": "perjury",
  "score": -0.196534244
  },
  {
  "word": "only",
  "score": -0.096144741
  }
  ],
  "version": "4.0.0",
  "email": "help@twinword.com",
  "result_code": "200",
  "result_msg": "Success"
  }
  ]

    db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleseed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });



