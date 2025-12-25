/**
 * CNC G-Code Simulator Backend
 * This server is responsible for handling G-code files
 * and passing parsed toolpath data to the frontend.
 */

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CNC G-Code Simulator Backend Running");
});

/**
 * Dummy endpoint for toolpath data
 * (In full version, this connects to C++ parser)
 */
app.post("/simulate", (req, res) => {
  const sampleToolpath = [
    { type: "G00", x: 0, y: 0, z: 5, feed: 0 },
    { type: "G01", x: 50, y: 0, z: -2, feed: 200 },
    { type: "G01", x: 50, y: 50, z: -2, feed: 200 },
    { type: "G01", x: 0, y: 50, z: -2, feed: 200 },
    { type: "G00", x: 0, y: 0, z: 5, feed: 0 }
  ];

  res.json(sampleToolpath);
});

module.exports = app;

