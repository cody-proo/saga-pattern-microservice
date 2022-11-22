const express = require("express");
const model = require("./model");

const route = express.Router();

route.get("/", async (req, res) => {
  const users = await model.find({});
  return res.status(200).json({ users });
});

route.get("/:id", async (req, res) => {
  const user = await model.findById(req.params.id);
  return res.status(200).json({ user });
});

route.post("/", async (req, res) => {
  const { username, email } = req.body;
  const course = new model({ username, email, credit: 20_000_000 });
  await course.save();
  return res.status(201).json({ course });
});

module.exports = route;
