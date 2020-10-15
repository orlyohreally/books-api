require("dotenv").config();
const express = require("express");
import mongoose from "mongoose";
import * as bodyParser from "body-parser";

import { authorsRouter } from "./services/authors";

export const runServer = async (port, mongoUri) => {
  if (!port) {
    process.exit(1);
  }

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  const apiPath = "/api/v1";
  const app = express();

  const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });

  app.use(bodyParser.json({ limit: "10mb" }));
  app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

  app.use(apiPath, authorsRouter);

  app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
      status: error.status,
      message: error.message,
      ...(process.env.NODE_ENV === "dev" && { stack: error.stack }),
    });
  });

  return server;
};
