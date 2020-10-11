require("dotenv").config();
const express = require("express");

export const runServer = async (port) => {
  if (!port) {
    process.exit(1);
  }
  
  const app = express();

  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });

  app.get("/hello-world", (req, res) => {
    res.send("Hello world");
  });

  return server;
};