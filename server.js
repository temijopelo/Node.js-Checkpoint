let http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3030, () => {
  console.log("Server is running at http://localhost:3000");
});
