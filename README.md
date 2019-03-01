# test-nodejs-weather-app
A simple command line weather app based on a tutorial by Brandon Morelli: 

https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d

## how to use

Clone or download the repo to your local machine. With Nodejs installed, type in the command line:

`node index.js -c { city_name }`

The flag `-c` is used to pass the city name as a variable. If it's missing or the city doesn't exist, a default city of Bydgoszcz (PL) will be used.