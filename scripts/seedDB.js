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
  "key" : "1",  
  "source": {
  "id": "cnn",
  "name": "CNN"
  },
  "author": "twinword inc.",
  "title": "Iran warns of 'consequences' after US strikes in Iraq and Syria",
  "description": "Iran has warned the US of \"consequences\" after Washington carried out airstrikes against an Iran-backed militia group in Iraq.",
  "url": "https://www.cnn.com/2019/12/30/middleeast/iraq-us-airstrikes-reaction-intl/index.html",
  "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/191229150359-iran-militia-us-strikes-super-tease.jpg",
  "publishedAt": "2019-12-30T11:21:42Z",
  "content": "(CNN)Iran has warned the US of \"consequences\" after Washington carried out airstrikes against an Iran-backed militia group in Iraq.\r\nThe US has \"openly shown its support to terrorism and shown its negligence to the independence and national sovereignty of cou… [+552 chars]",
  "label": "neutral",
  "score": -0.0237951488125,
  "ratio": -0.01650735276106,
  "keywords": [
  {
  "word": "support",
  "score": 0.770246867
  },
  {
  "word": "openly",
  "score": 0.467771937
  },
  {
  "word": "independence",
  "score": 0.467771937
  },
  {
  "word": "show",
  "score": 0.342751764
  },
  {
  "word": "group",
  "score": 0.192192596
  },
  {
  "word": "terrorism",
  "score": -0.82767436
  },
  {
  "word": "negligence",
  "score": -0.82767436
  },
  {
  "word": "have",
  "score": -0.325818304
  },
  {
  "word": "out",
  "score": -0.183460568
  },
  {
  "word": "warn",
  "score": -0.151326383
  }
  ],
  "version": "4.0.0",
  "email": "help@twinword.com",
  "result_code": "200",
  "result_msg": "Success"
  },

  {
  "key" : "2",  
  "source": {
  "id": "the-new-york-times",
  "name": "The New York Times"
  },
  "author": "twinword inc.",
  "title": "A Deadly Crackdown in Iran",
  "description": "Behind the curtain of an internet blackout, the Islamic Republic’s security forces have killed at least 180 unarmed protesters.",
  "url": "https://www.nytimes.com/2019/12/03/podcasts/the-daily/iran-protests.html",
  "urlToImage": "https://static01.nyt.com/images/2019/12/03/podcasts/03daily/merlin_165109089_6edbb6a4-6a1d-48db-a1a3-8aeddae09226-facebookJumbo.jpg",
  "publishedAt": "2019-12-03T11:47:11Z",
  "content": "Farnaz Fassihi contributed reporting.\r\nThe Daily is made by Theo Balcomb, Andy Mills, Lisa Tobin, Rachel Quester, Lynsea Garrison, Annie Brown, Clare Toeniskoetter, Paige Cowett, Michael Simon Johnson, Brad Fisher, Larissa Anderson, Wendy Dorr, Chris Wood, Je… [+446 chars]",
  "label": "neutral",
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
  "key" : "3",  
  "source": {
  "id": "the-new-york-times",
  "name": "The New York Times"
  },
  "author": "twinword inc.",
  "title": "Once Upon a Revolution in Iran",
  "description": "Forty years after the Iranian revolution of 1979, the people of Iran are still struggling for their rights.",
  "url": "https://www.nytimes.com/2019/12/24/opinion/iran-revolution.html",
  "urlToImage": "https://static01.nyt.com/images/2019/12/17/opinion/00burn-09/00burn-09-facebookJumbo.jpg",
  "publishedAt": "2019-12-24T16:00:16Z",
  "content": "I spent the better part of two months, from Christmas 1978 until late February 1979, covering the Islamic revolution in Iran. There was no internet, no mobile phones, no Twitter. No one wore masks to hide their faces. The anger was immediate and raw. It led t… [+4047 chars]",
  "label": "negative",
  "score": -0.091385346041667,
  "ratio": -0.32253434672563,
  "keywords": [
  {
  "word": "better",
  "score": 0.906288393
  },
  {
  "word": "late",
  "score": 0.117922934
  },
  {
  "word": "anger",
  "score": -0.666762836
  },
  {
  "word": "no",
  "score": -0.435918348
  },
  {
  "word": "revolution",
  "score": -0.366912147
  },
  {
  "word": "face",
  "score": -0.126476981
  },
  {
  "word": "mobile",
  "score": -0.117922934
  },
  {
  "word": "wear",
  "score": -0.110566685
  },
  {
  "word": "mask",
  "score": -0.110566685
  },
  {
  "word": "one",
  "score": -0.103055557
  },
  {
  "word": "hide",
  "score": -0.085642117
  },
  {
  "word": "raw",
  "score": -0.083155932
  }
  ],
  "version": "4.0.0",
  "email": "help@twinword.com",
  "result_code": "200",
  "result_msg": "Success"
  },

  {
  "key" : "4",  
  "source": {
  "id": "cnn",
  "name": "CNN"
  },
  "author": "twinword inc.",
  "title": "Trump tweets 'threat' to Iran",
  "description": "President Donald Trump has sent a series of tweets following protests at the US embassy in Baghdad.  CNN's Boris Sanchez reports.",
  "url": "https://www.cnn.com/videos/politics/2019/12/31/trump-tweets-baghdad-protesters-sanchez-pkg-vpx.cnn",
  "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/191231141609-01-trump-1219-super-tease.jpg",
  "publishedAt": "2019-12-31T22:28:30Z",
  "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
  "label": "neutral",
  "score": -0.021721194,
  "ratio": -0.13429750259822,
  "keywords": [
  {
  "word": "find",
  "score": 0.14001818
  },
  {
  "word": "out",
  "score": -0.183460568
  }
  ],
  "version": "4.0.0",
  "email": "help@twinword.com",
  "result_code": "200",
  "result_msg": "Success"
  },

  {
  "key" : "5",  
  "source": {
  "id": "the-new-york-times",
  "name": "The New York Times"
  },
  "author": "twinword inc.",
  "title": "Iran Is Crushing Freedom One Country at a Time",
  "description": "Grass-roots movements in Iran, Iraq and other nations continue to push for rights nonetheless.",
  "url": "https://www.nytimes.com/2019/12/03/opinion/iran-iraq-trump.html",
  "urlToImage": "https://static01.nyt.com/images/2019/12/03/opinion/03friedman1/03friedman1-facebookJumbo.jpg",
  "publishedAt": "2019-12-04T00:04:54Z",
  "content": "These movements are authentic and inspiring, but their chances of taking power remain remote, largely because their biggest opponent the Islamic republic of Iran is ready to arrest and kill as many democracy demonstrators as needed to retain its grip on Iraq,… [+2659 chars]",
  "label": "positive",
  "score": 0.079926842846154,
  "ratio": 0.2097037617507,
  "keywords": [
  {
  "word": "inspiring",
  "score": 0.904515965
  },
  {
  "word": "authentic",
  "score": 0.881294943
  },
  {
  "word": "ready",
  "score": 0.530657505
  },
  {
  "word": "chance",
  "score": 0.248096703
  },
  {
  "word": "big",
  "score": 0.196534377
  },
  {
  "word": "power",
  "score": 0.117922934
  },
  {
  "word": "remote",
  "score": 0.117922934
  },
  {
  "word": "opponent",
  "score": -0.82767436
  },
  {
  "word": "kill",
  "score": -0.637084171
  },
  {
  "word": "grip",
  "score": -0.192192596
  },
  {
  "word": "arrest",
  "score": -0.133267514
  },
  {
  "word": "need",
  "score": -0.096144741
  },
  {
  "word": "movement",
  "score": -0.071533022
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

