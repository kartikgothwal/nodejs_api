const http = require("http");
const fs = require("fs");
const PORT = 8080;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Home page</h1>");
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>About page</h1>");
  } else if (req.url == "/services") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>Services page</h1>");
  } else if (req.url == "/api") {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>page not found</h1>");
  }
});
server.listen(PORT, (error) => {
  console.log(`listening to the server on http://localhost:${PORT}`);
});
