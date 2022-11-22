const express = require("express");
const model = require("./model");

const route = express.Router();

route.get("/", async (req, res) => {
  const orders = await model.find({});
  return res.status(200).json({ orders });
});

route.get("/:id", async (req, res) => {
  const order = await model.findById(req.params.id);
  return res.status(200).json({ order });
});

route.post("/", async (req, res) => {
  const { userId, courseId } = req.body;
  const order = new model({ userId, courseId });
  await order.save();
  return res.status(201).json({ order });
});

module.exports = route;
