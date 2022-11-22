const express = require("express");
const mongoose = require("mongoose");
const controller = require("./controller.js");
const server = express();
const port = 4000;

mongoose.connect(
  "mongodb+srv://polygony:nima1381@cluster0.hdjlm.mongodb.net/user-saga-db"
);
mongoose.connection.on("open", () => {
  console.log("The database is running");
});

mongoose.connection.on("error", () => {
  console.log("Database Error");
});

server.use(express.json());
server.use("/api/users", controller);

server.listen(port, () => {
  console.log(`The server is running at port ${port}`);
});
