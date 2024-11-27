const express = require("express");

const Movie = require("../models/movie");

const router = express.Router();

router.get("/get-all", async (req, res) => {
  try {
    const data = await Movie.find();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

router.post("", async (req, res) => {
  try {
    const data = await Movie(req.body).save();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await Movie.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
