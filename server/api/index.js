require('dotenv').config()
const http = require('http');
const app = require('../index'); 

const port = parseInt(process.env.SERVER_PORT) || 3000;

const server = http.createServer(app);
server.listen(port);