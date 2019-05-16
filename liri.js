require("dotenv").config();

// create initial global variables

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

// run movieThis function

function movieThis () {
    axios.get("https://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy")
    .then(function(response) {
        var omdbResults = 
        "--------------------------" +
        "\nMovie Title: " + response.data.Title + 
        "\nYear of Release: " + response.data.Year +
        "\nIMDB Rating: " + response.data.imdbRating +
        "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
        "\nCountry Produced: " + response.data.Country +
        "\nLanguage: " + response.data.Language +
        "\nPlot: " + response.data.Plot +
        "\nActors/Actresses: " + response.data.Actors;
    console.log(omdbResults);
    // append to log.txt
    fs.appendFile("log.txt", omdbResults, function(err) {   
    if (err) {
            console.log(err);
          }
          else {
            console.log("Content Added to Log!");
          }
    })
    })
    .catch(function (error) {
        console.log(error);
    });

    if (userInput === undefined) {
        axios.get("https://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            var nobodyResults = 
            "--------------------------" +
            "\nMovie Title: " + response.data.Title + 
            "\nYear of Release: " + response.data.Year +
            "\nIMDB Rating: " + response.data.imdbRating +
            "\nRotten Tomatoes Rating: " + response.data.Ratings[1] +
            "\nCountry Produced: " + response.data.Country +
            "\nLanguage: " + response.data.Language +
            "\nPlot: " + response.data.Plot +
            "\nActors/Actresses: " + response.data.Actors +
            "\nIf you haven't watched Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/>" +
            "\nIt's on Netflix!";
        console.log(nobodyResults);
        })
    }
    
}

// run doThis function

function doThis() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
          }

    // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});
}

