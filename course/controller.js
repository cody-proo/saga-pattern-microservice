const express = require("express");
const model = require("./model");

const route = express.Router();

route.get("/", async (req, res) => {
  const courses = await model.find({});
  return res.status(200).json({ courses });
});

route.get("/:id", async (req, res) => {
  const course = await model.findById(req.params.id);
  return res.status(200).json({ course });
});

route.post("/", async (req, res) => {
  const { title, description, price } = req.body;
  const course = new model({ title, description, price });
  await course.save();
  return res.status(201).json({ course });
});

module.exports = route;
