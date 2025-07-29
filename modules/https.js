import http from "http";

const server = http.createServer((request, response) => {
    response.end("hello, I am Nitin.");
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});


  
// console.log("hello")
