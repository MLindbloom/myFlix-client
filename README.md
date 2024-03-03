
# MyFLix Movie App

Hello and Welcome to myFlix Movie App! [Hosted on Netlify](https://mll-myflix.netlify.app)


## Overview

MyFlix is a SPA (single-page app) built utilizing React, React Bootstrap, React Router, and Bootstrap. It provides users with a collection of movies. The included features allow for user profile registration and login, profile management, the abitily to browse the movie database, users to search and view information about specific movies, and users to save movies to a favorite movie list. The app uses JWT (JSON web token) for user authentication and authorization and password hashing for user data security.

### Features
**Allows Users to:**
* Create and update an account.  
* Find movies by Title, Genre, or Director.  
* Create and update a Favorite Movies List.  
* Delete their account.

### API

MyFLix app uses [Github movie_api repository](https://github.com/MLindbloom/movie_api) to provide data about the movies. The data included for each movie includes: unique object IDs, movie title, movie description, directior name, director description, genre name, and movie poster image.

### Supported Requests
|                   Request                   |                URL               | HTTP Method |
|:-------------------------------------------:|:--------------------------------:|:-----------:|
| Get List of Movies                          | /movies                          | GET         |
| Get List of Movies by Director              | /movies/directors/:directorName  | GET         |
| Get List of Movies by Genre                 | /movies/genres/:genreName        | GET         |
| Get Information about a Movie by Title      | /movies/:Title                   | GET         |
| Add a Movie                                 | /movies                          | POST        |
| Add a User                                  | /users                           | POST        |
| Update User Information                     | /users/:Username                 | PUT         |
| Add a movie to a User's Favoites List       | /users/:Username/movies/:MovieID | POST        |
| Remove a movie from a User's favorites list | /users/:Username/movies/:MovieID | DELETE      |
| Remove a User by Username                   | /users/:Username                 | DELETE      |

### React Components

**SignupView**
* Allows users to create a new profile for the app

**LoginView**
* Allows users to login to their profile

**MainView**
* Displays movie cards of each movie for users to browse
* Allows users to search app for a specific movie
* Users can favorite a movie from each specific movie card
* Users can click to see more information about a specific movie

**MovieView**
* Displays the movie information including: Image, Title, Description, Director and Genre

**ProfileView**
* Displays User information including: Username, Password, Email, and Birthday
* Allows Users to update their information
* Displays users favorite movies and allows users to delete movies from favorites

### Technologies 

* **Frontend**: React, React Router, and Bootstrap.  
* **Backend**: Node.js, Express, and MongoDB.  
* **Authentication**: JWT (JSON Web Tokens)
* **Database**: MongoDB Atlas

### Dependencies
* bootstrap: "^5.3.3",
* prop-types: "^15.8.1",
* react: "^18.2.0",
* react-bootstrap: "^2.10.1",
* react-dom: "^18.2.0",
* react-icons: "^5.0.1",
* react-router: "^6.22.1",
* react-router-dom: "^6.22.1",
* react-scripts: "^5.0.1"

### Development Dependencies
* parcel: "^2.11.0"
* @parcel/transformer-sass: "^2.11.0"
* process: "^0.11.0"

### Hosting

[Hosted on Netlify](https://mll-myflix.netlify.app)
  
[Github movie_api repository](https://github.com/MLindbloom/movie_api)

[Github myFlix-client repository](https://github.com/MLindbloom/myFlix-client)

[http://localhost:1234](http://localhost:1234)
