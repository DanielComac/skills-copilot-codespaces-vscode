// Create web server
// Create a web server that listens to the port 3000 and returns the comments data in the JSON format. The comments data is stored in the comments.js file.

const http = require('http');
const comments = require('./comments');
const port = 3000;

const requestHandler = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(comments));
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});