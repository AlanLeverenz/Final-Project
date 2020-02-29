# News Polarizer

<img src='client/src/assets/images/newsit.png' width='200px'>

**A news research application built using NLU sentiment analysis to polarize coverage on a news headline.**

Built by the NewsIT Team, part of Columbia Engineering's Winter 2020 Full Stack Coding Bootcamp Class

* John Harper
* Alan Leverenz
* Ariel Quinones

## What the app does

News Polarizer applies sentiment score values to news articles. The purpose of the app is to present the user with a "polarized" view of news articles. A search returns articles with relative high, low, and middle sentiment scores. These articles include a color-shaded score value. The users can save returned articles, associated with their user login, and view all query results in a graph, with links to the article URL's.

## How the app is built

News Polarizer is built using a MERN stack (MongoDB, Express, React, and Node). User authentication is based on Express-Sessions. The MongoDB has three collections that serve the data: Article, Query, and User.

## How it works

Here is the deployed URL:

<http://news-polarizer.herokuapp.com/>

### Today's Headlines

![](client/src/assets/images/today_headlines.png)

The Home route (Today) activates an automatic search for current headlines, returning 12 articles. These articles are intended to give the user ideas on what current events they may wish to search for.

### Navbar

![](client/src/assets/images/navbar.png)

The Navbar enables the user to Signup or Login to begin searching, view saved articles or queries. After being authenticated, the user is routed to the Search page.

### Searching

News Polarizer collects news articles based on the search string.

* An API connection to RapidAPI news sources returns basic article metadata, such as title, source, author, description, url, image url, and date published.
* The articles are run through the IBM Watson NLU (Natural Language Understanding) sentiment analyzer, which accesses the article url, analyzes the content, and adds a sentiment score to the response.
* The articles with the highest and lowest score, and an article midway between the other two are presented to the user. Scores may range from -1 to +1.
* Click on the Save button to save the article so it can be viewed at a later date. Articles are saved in a Article collection which is accessed by clicking on **Saved** in the Navbar.
  
![](client/src/assets/images/search_page.png)

## Viewing Saved Articles

![](client/src/assets/images/Navbar_Saved.png)

Only articles that were saved by the current user are displayed. The query string used to find the article is styled in italic blue above the sentiment score. Click on the Delete button to remove the article from the database.

![](client/src/assets/images/saved_page.png)

## Viewing All Search Results

![](client/src/assets/images/Navbar_Visuals.png)

The app stores 12 articles for each search which are saved in the Query collection. The number of queries that are stored is indicated by the number of pages. Left and right arrows surround the page number that is being currently displayed. Each article in a page is visualized as a dot in the graph. The article's score determines its vertical position (negative to positive) and color (reds = negative, blues = neutral, greens = positive).

* IBM Watson NLU sentiment decimal scores have been converted to positive intervals ranging from 0 - 100.
* Click on a dot to view its headline above.
* Click on a right or left arrow to page through the query collections.
* Click on the Delete button to remove all 12 articles in the graph from the Query database.

![](client/src/assets/images/visuals_page.png)
