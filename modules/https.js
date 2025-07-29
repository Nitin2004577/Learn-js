import http from "http";

const server = http.createServer((request, response) => {
console.log(request.method);
// console.log(`Received ${request.method} request for ${request.url}`);

    const data = {
    name: "Nitin",
    age: 25,
    city: "Jhapa",
};

response.writeHead(200, { "content-type": "application/json" });
response.end(JSON.stringify(data));

// console.log("<h1> Server is running on port 5000 </h1>");
});



server.listen(5000, () => {
    console.log("Server is running on port 5000");
});

