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

//run showConcertInfo function
function showConcertInfo() {
    axios
    .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function(response){
        console.log(response.data);
        for (var i = 0; i < response.data.length; i++) {
            var datetime = response.data[i].datetime; 
            var dateArr = datetime.split('T'); 

            var concertResults = 
            "--------------------------------------------------------------------" +
            "\nVenue Name: " + response.data[i].venue.name + 
            "\nVenue Location: " + response.data[i].venue.city +
            "\nDate of the Event: " + moment(dateArr[0], "MM-DD-YYYY"); //dateArr[0] should be the date separated from the time
    console.log(concertResults);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}
// run showSongInfo function


