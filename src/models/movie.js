const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  watched: {
    type: Boolean,
    required: true,
  },
  notes: {
    type: String,
    rquired: true,
  },
});

module.exports = model("Movie", movieSchema);
