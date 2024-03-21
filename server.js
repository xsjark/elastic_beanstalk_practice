const express = require('express');
const server = express();
const cors = require('cors');

const port = 8080;

// Enable CORS for all origins
server.use(cors());

server.get('/', (req, res) => {
    res.send('Express is working!')
})

// Route to test CORS
server.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from Express!'
  };
  res.json(data);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
