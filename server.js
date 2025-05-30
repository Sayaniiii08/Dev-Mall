const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

// ✅ Serve static files from 'public'
app.use(express.static('public'));

// ✅ Route for homepage
// ✅ This line already serves index.html from public by default
app.use(express.static('public'));



// ✅ Route to fetch job pages (basic simulation)
app.get('/api/jobs', async (req, res) => {
  const companies = [
    { name: 'Google', url: 'https://careers.google.com/jobs/results/' },
    { name: 'Microsoft', url: 'https://careers.microsoft.com/us/en' },
    { name: 'Meta', url: 'https://www.metacareers.com/jobs' }
    // Add more here
  ];

  res.json(companies);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`DevMall is running at http://localhost:${PORT}`);
});
