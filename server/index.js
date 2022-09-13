const express = require("express");
const http = require("http");

const app = express();
const httpServer = http.createServer(app);

require('dotenv').config();

const port = process.env.PORT || 8000;

httpServer.listen(port, () => {
  console.log('listening on port: ' + port)
});