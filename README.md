
# MyFLix Movie App

Hello and Welcome to myFlix Movie App!


## Overview

MyFlix is app built utilizing the MERN stack. The included features allow for user profile registration and authentication, profile management, and the ability to search to save movies from an API database.

### Features

* Create and update an account.  
* Find movies by Title, Genre, or Director.  
* Create and update a Favorite Movies List.  
* Delete their account. 


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

### Technologies 

* **Frontend**: React, React Router, and Bootstrap.  
* **Backend**: Node.js, Express, and MongoDB.  
* **Authentication**: JWT (JSON Web Tokens)
* **Database**: MongoDB Atlas

### Hosting
  
Hosted on Heroku: [https://mll-movie-app-2b0ca377526b.herokuapp.com](https://mll-movie-app-2b0ca377526b.herokuapp.com/)

[http://localhost:1234](http://localhost:1234)
