//
// Simple command line weather app
// based on a tutorial by Brandon Morelli: 
// https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d
//
//////////////////////////////////


const request = require('request');

const apiKey = '12b0d5f204bb544da1c49ba64c87c765';
const city = 'london';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

request(url, function(err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        const weather = JSON.parse(body);
        const message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});