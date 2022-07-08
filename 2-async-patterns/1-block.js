const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Home page");
  } else if (request.url === "/about") {
    //Blocking code ASYNC :)
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} , ${j}`);
      }
    }
    response.end("About page");
  } else {
    response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log(`server listening on port 5000`);
});
