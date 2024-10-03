// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app (for deployment)
app.use(express.static(path.join(__dirname, 'client/build')));

// Movie search route (if you want to fetch data on the server side)
const API_KEY = "1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";

app.get('/api/search', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  const searchURL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

  fetch(searchURL)
    .then(response => response.json())
    .then(data => res.json(data.results))
    .catch(error => res.status(500).json({ error: 'Failed to fetch data' }));
});

// Catch-all handler for React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
