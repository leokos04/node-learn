const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome");
    res.end();
  }
  if (req.url === "/about") {
    res.write("Salamaleikum");
    res.end();
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>We can't seem to find the page you are looking for </p>
  <a href="/">Back Home</a>
  `);
});

server.listen(3000);
