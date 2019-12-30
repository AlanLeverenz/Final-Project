const mongoose = require("mongoose");
const db = require("../models");

// This file empties the articles collection and inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI ||
"mongodb://localhost/reactarticlelist"

);

const articleseed = [
  {
    key: "1",
    query: 'impeachment trump',
    source: { id: null, name: 'Lifehacker.com' },
    author: 'twinword inc.',
    title: 'What Happens Now That President Trump Has Been Impeached?',
    description: 'On Wednesday and in a vote that split very closely along party lines, the House impeached President Donald Trump, making him the third president in U.S. history to have ever been impeached. In its vote, the House passed both articles of impeachment brought fo…',
    url: 'https://lifehacker.com/what-happens-now-that-president-trump-has-been-impeache-1840531039',
    urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/br8pcbzc6jwcngid2voq.jpg',
    publishedAt: '2019-12-19T16:41:00Z',
    content: 'On Wednesday and in a vote that split very closely along party lines, the House impeached President Donald Trump, making him the third president in U.S. history to have ever been impeached. In its vote, the House passed both articles of impeachment brought fo… [+3493 chars]',
    type: 'negative',
    score: -0.094017221533333,
    ratio: -0.5594714590221,
    keywords: [
      { word: "hello", score: .01 },
      { word: "talk", score: .0 },
      { word: "bye", score: -.01 }
    ],
    version: '4.0.0',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
  },
  {
    key: "2",
    query: 'impeachment trump',
    source: { id: 'cnn', name: 'CNN' },
    author: 'twinword inc.',
    title: 'McConnell: No chance Trump will be removed from office',
    description: 'In an interview on Fox News, Senate Majority Leader Mitch McConnell (R-KY) said there was "no chance" President Trump would be removed from office after an impeachment trial in the Senate.',
    url: 'https://www.cnn.com/videos/politics/2019/12/13/mitch-mcconnell-impeachment-no-chance-trump-will-be-removed-sot-vpx.cnn',
    urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/191213030921-mitch-mcconnell-no-chance-trump-removed-super-tease.jpg',
    publishedAt: '2019-12-13T08:33:29Z',
    content: "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
    type: 'neutral',
    score: -0.021721194,
    ratio: -0.13429750259822,
    keywords: [
      { word: "hello", score: .02 },
      { word: "talk", score: .0 },
      { word: "bye", score: -.02 }
    ],
    version: '4.0.0',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
  },
  {
    key: "3",
    query: 'impeachment trump',
    source: { id: 'the-new-york-times', name: 'The New York Times' },
    author: 'twinword inc.',
    title: 'Facing Blockade in Senate, House Democrats Bet Their Votes Are Worth It',
    description: 'Backing the impeachment of President Trump is a politically risky step for many Democrats, more so given that Republicans have made clear the effort will die in the Senate.',
    url: 'https://www.nytimes.com/2019/12/18/us/impeachment-democrats-votes.html',
    urlToImage: 'https://static01.nyt.com/images/2019/12/18/us/politics/18dc-assess2/18dc-assess2-facebookJumbo.jpg',
    publishedAt: '2019-12-18T20:34:12Z',
    content: 'They showed that Mr. Trump and his aides and allies linked a sought-after Oval Office meeting for Ukraines new president to the investigations. And they established that the administration had frozen $391 million in military aid to Ukraine an ally under threa… [+1800 chars]',
    type: 'neutral',
    score: 0.023265215916667,
    ratio: -0.18266584174895,
    keywords: [
      { word: "hello", score: .03 },
      { word: "talk", score: .0 },
      { word: "bye", score: -.03 }
    ],
    version: '4.0.0',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
  },
  {
    key: "4",
    query: 'impeachment trump',
    source: { id: 'the-new-york-times', name: 'The New York Times' },
    author: 'twinword inc.',
    title: 'Here Are the Key Members to Watch on the House Judiciary Committee',
    description: 'The panel has been involved with impeachment proceedings against three presidents. On Wednesday, Donald Trump will be the fourth.',
    url: 'https://www.nytimes.com/2019/12/04/us/politics/members-house-judiciary-committee.html',
    urlToImage: 'https://static01.nyt.com/images/2019/12/04/us/politics/04dc-committee-1/merlin_163530822_4e9e4b8b-87da-466e-93ae-c59aad9cdeee-facebookJumbo.jpg',
    publishedAt: '2019-12-04T14:30:11Z',
    content: 'WASHINGTON Since its creation in 1813, the House Judiciary Committee has served as the backdrop to debates over the most contentious issues in American history, including a womans right to vote, immigration and civil rights. It has either held or recommended … [+1692 chars]',
    type: 'positive',
    score: 0.14370881054167,
    ratio: 0.36540409373848,
    keywords: [
      { word: "hello", score: .04 },
      { word: "talk", score: .0 },
      { word: "bye", score: -.04 }
    ],
    version: '4.0.0',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
  },
  {
    key: "5",
    query: 'impeachment trump',
    source: { id: 'the-new-york-times', name: 'The New York Times' },
    author: 'twinword inc.',
    title: 'House Democrats Expected to Unveil Articles of Impeachment Against Trump',
    description: 'Democratic leaders planned a 9 a.m. news conference to revealed charges against President Trump.',
    url: 'https://www.nytimes.com/2019/12/10/us/politics/trump-impeachment-articles.html',
    urlToImage: 'https://static01.nyt.com/images/2019/12/10/us/10DC-IMPEACH/10DC-IMPEACH-facebookJumbo.jpg',
    publishedAt: '2019-12-10T13:51:48Z',
    content: 'WASHINGTON House Democratic leaders were expected to announce Tuesday that they would move ahead this week with two articles of impeachment against President Trump charging him with abuse of power and obstruction of Congress, accusing him of violating the Con… [+497 chars]',
    type: 'negative',
    score: -0.24813089622222,
    ratio: -0.65182813142016,
    keywords: [
      { word: "hello", score: .05 },
      { word: "talk", score: .0 },
      { word: "bye", score: -.05 }
    ],
    version: '4.0.0',
    email: 'help@twinword.com',
    result_code: '200',
    result_msg: 'Success'
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



