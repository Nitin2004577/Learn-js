import http from "http";

const server = http.createServer((request, response) => {
  console.log(request.method);
  // console.log(`Received ${request.method} request for ${request.url}`);

  console.log(request.url);

  if (request.url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Welcome to the Home Page</h1>");
  }else if   (request.url === "/about") {
     response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>About Page</h1>");
  }else if (request.url === "/product") {
     response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Product Page</h1>");
  } else if (request.url === "/contact") {
     response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Contact Us Page</h1>");
  }
   else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Page not found</h1>");
  }
});


server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
