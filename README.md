# FriendFinder

## Overview

A full-stack application that uses Express to handle routing. The app is written such that it can be deployed on a local server or to Heroku so that multiple users can fill it out. In this application the user accesses the site through a web-browser, then after clicking a button is redirected to a new page. On this page, the user will enter some personal information (name and a link to a photo) and then be asked to answer ten questions. (Representative Myers-Briggs questions were used.) Upon submission, these answers are then compared to those of other "users" in a "database" (actually an array in a JavaScript file). The name and photo of the best match will be returned to the user in a modal. If the algorithm used for finding the best match identifies multiple friends with identical scores (pretty common with even a small database of friends), one is selected at random and returned. Upon providing the user with a match, the survey form is also cleared. Finally, the user's information is added to the friends "database" so more people can use the app and potentially match with the user him/herself.

## Installation

Upon downloading the repo, anyone wishing to run the applications will need to install the npm node, express, body parser, and  path packages. An appropriate "npm init -y" operation to build the appropriate package and package-lock JSON files must be performed. These packages can be obtained at https://www.npmjs.com/. The app is deployable to Heroku. 

## Authors

All code displayed here was written by Patrick Kearney

## Built With

* JavaScript and JQuery.
* Node.js
* The NPM package manager for the JavaScript express, path, and body-parser packages.
* Bootstrap 4.1 was used to construct the html pages.
* Font Awesome (and a little CSS styling) were used to create the smiley faces used in the html files. 

## License

This project is licensed under the MIT License.

## Acknowledgments

This application was constructed as part of the University of Kansas Full-Stack Web-Development Coding Bootcamp Program offered in conjunction with Trinity Educational Services. Thanks to these institutions for providing the initial project requirements. Code studied in the course activities also served as a guide and provided helpful suggestions for building the application. 
