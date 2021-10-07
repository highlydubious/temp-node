const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Our HomePage");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end("Oops");
  }
});

server.listen(5000);
