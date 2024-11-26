const express = require("express");

const Movie = require("./models/movie");

const router = express.Router();

router.get("/api/movies", async (req, res) => {
  try {
    const data = await Movie.find();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

router.post("/api/movie", async (req, res) => {
  try {
    const data = await Movie(req.body).save();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

router.put("/api/movie/:id", async (req, res) => {
  try {
    const data = await Movie.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/api/movie/:id", async (req, res) => {
  try {
    const data = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
