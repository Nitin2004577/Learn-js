const http = require('http');

const server = http.createServer((request, response) => {
    response.end ("Hello, i am Nitin from Nepal, Now I am doing Node.js for Backend ");
});

server.listen(5000, () => {
    console.log("Server is running on port 5000.....");
});