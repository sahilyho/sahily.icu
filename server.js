const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY;
const stock_api_key = process.env.REACT_APP_STOCK_API_KEY;
// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/projects.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// Route to handle POST requests to /predict
app.post('/predict', (req, res) => {
  // Code to handle predictions goes here
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});