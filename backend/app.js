const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow your frontend access

app.get('/reddit', async (req, res) => {
  try {
    const response = await axios.get('https://www.reddit.com/r/all/top.json?t=day&sort=top&limit=50');
    res.json(response.data); // Send data to frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch from Reddit' });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));