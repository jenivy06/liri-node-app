require("dotenv").config();

// create initial variables

var keys = require("./keys.js");
var Spotify = require('node-spotify-api'); 
var spotify = new Spotify(keys.spotify);

var moment = require('moment'); 
moment().format();

var axios = require('axios'); 

var fs = require('fs'); 

var action = process.argv[2]; 
var userInput = process.argv[3]; 

//run function for command line arguments

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

// run concertThis function

function concertThis(userInput) {
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
    .then(function(response) {    
        for (var i = 0; i < response.data.length; i++) {

            // Get concert date and format it to "MM/DD/YYYY"
            var date = response.data[i].datetime;
            var convertedDate = (moment().format("MM/DD/YY"));
            //print concert results to terminal
            var concertResults = 
                "--------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name + 
                    "\nVenue Location: " + response.data[i].venue.city +
                    "\nDate of the Event: " + convertedDate
            console.log(concertResults);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
        

}

// run spotifySong function

function spotifySong (userInput) {
    spotify
    .search({ type: 'track', query: userInput })
    .then(function(response) {
        for (var i = 0; i < 5; i++) {
            var spotifyResults = 
            "--------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name + 
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;
                    
            console.log(spotifyResults);
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}