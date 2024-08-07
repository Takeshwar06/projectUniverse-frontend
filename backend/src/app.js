const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// error middelware
app.use(errorMiddleware);

module.exports = app;
