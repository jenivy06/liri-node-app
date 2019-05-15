require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api'); 
var spotify = new Spotify(keys.spotify);

var moment = require('moment'); 
moment().format();

var axios = require('axios'); 

var fs = require('fs'); 

var action = process.argv[2]; 
var userInput = process.argv[3]; 

switch (action) {
    case "concert-this":
        concertThis(userInput);
        break;
    case "spotify-this-song":
        spotifySong(userInput);
        break;
    case "movie-this":
        movieThis(userInput);
        break;
    case "do-what-it-says":
        doThis(userInput);
        break;
};

