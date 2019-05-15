require("dotenv").config();

//initial vars
var keys = require("./keys.js");
//grab spotify package
var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');
//grab axios package
var axios = require("axios");
// grab moment package
var moment = require('moment');
moment().format();
var fs = require("fs");

//capture arguments input
var userCommand = process.argv[2];
var inputParameter = process.argv[3];

//Execute function when user inputs commands

//runCommand(userCommand, inputParameter);

//Make it so liri.js can take in one of the following commands:
//* `concert-this` (from Bands in Town API)

switch (userCommand) {
    case "concert-this":
    showConcertInfo();
    break;

//   * `spotify-this-song` 
    case "spotify-this-song":
    showSongInfo();
    break;
//   * `movie-this` (from OMDB API)
    case "movie-this":
    showMovieInfo();
    break;
 //  * `do-what-it-says`
    case "do-what-it-says":
    showSomeInfo();
    break
}


