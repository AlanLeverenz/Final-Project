# News Polarizer

A news research application built using NLU sentiment analysis to polarize coverage on a news headline.
**Built by the NewsIT Team, part of Columbia Engineering's Winter 2020 Full Stack Coding Bootcamp Class**
* John Harper
* Alan Leverenz
* Ariel Quinones
* Ayisha Saydana

### Searching News Headlines
To intialize a search, enter any news headline into the home screen search field. Results may take up to 15 seconds to populate.

### Understanding Results
Upon completing a search, News Polarizer returns three result types. These three articles are parsed from bulk results returned from News API.

###### Most Negative (leftmost article, or first on mobile)
The _lowest-scoring_ article, based on sentiment analysis scores returned from IBM Watson NLU sentiment of the full text of every returned article.

###### Median Result (center article, or second on mobile)

###### Most Enthusiastic (rightmost article, or last on mobile)
The _highest-scoring_ article, based on sentiment analysis scores.

### Protected Features
News Polarizer includes two protected features for users who create a username and password, and log in with their account.

###### Saved articles
Authenticated users can save articles in their account and retrieve them, along with the result score.

###### Data Visualization
Sets of twelve articles returned from a search are graphically represented by colored dots in order of their sentiment score. Click on a dot to view its headline. Click on the headline to read the original article. Click the delete button to remove the set of articles. 
