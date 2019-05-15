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
