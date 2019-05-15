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

//capture arguments input
var userCommand = process.argv[2];
var inputParameter = process.argv[3];

//Execute function when user inputs commands

runCommand(userCommand, inputParameter);

//Make it so liri.js can take in one of the following commands:
//* `concert-this` (from Bands in Town API)

switch (userCommand) {
    case "concert-this":
    showConcertInfo();
    break;

//   * `spotify-this-song` 
    case "spotify-this-song";


}



//   * `movie-this` (from OMDB API)

 //  * `do-what-it-says`

// Run axios function for OMDB


axios
.get("https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
.then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

// Run axios function for Bands in Town API
function showConcertInfo(){

}
axios
.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });






