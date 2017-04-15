const express = require('express');
const { resolve } = require('path');
const http = require('http');
const helmet = require('helmet');
const db = require('./db.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.get('/weather', (req, res) => {
  res.json(db.weather);
});

app.use(express.static(resolve(__dirname, 'build')));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('The server is running.');
});
