const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const movieRoutes = require("./routes/movieRoutes");

// Remember to change cors later
const setupServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan("dev"));
  app.use("/api/movie", movieRoutes);

  return app.listen({ port: process.env.PORT || 3000 }, () => {
    console.log(`Server is running at PORT ${process.env.PORT}`);
  });
};

module.exports = setupServer;
