// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log(`running on localhost: ${port}`);
  };

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData (request, response) {
    response.send(projectData);
  };

// Post Route
app.post('/add', addWeather);

function addWeather (request,response){
  let data = request.body;
  console.log ('Server Side Data ', data);
  projectData['temp'] = data.temp;
  projectData['date'] = data.date;
  projectData['feelings'] = data.feelings;

  response.send(projectData);
};