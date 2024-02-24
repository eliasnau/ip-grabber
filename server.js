const express = require("express");
const next = require("next");
const requestIp = require("request-ip");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Apply request-ip middleware
  server.use(requestIp.mw());

  // Other middleware or routes can be added here

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
