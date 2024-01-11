const fs = require("fs");
const http = require("http");
const PORT = 8080;
const server = http.createServer();
server.on("request", (req, res) => {
  // fs.readFile("./Stream_Buffer/main.txt", "utf-8", (err, data) => {
  //   if (err) {
  //     res.statusCode = 400;
  //     res.end("error found");
  //   }
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   res.end(`<p>${data}</p>`);
  // });
  const rsstream = fs.createReadStream("./Stream_Buffer/main.txt");
  rsstream.on("data", (chunk) => {
    res.write(chunk);
  });
  rsstream.on("end", () => {
    res.end();
  });
});
server.listen(PORT, (err) => {
  console.log(`listening to the PORT http://localhost:${PORT}`);
});
