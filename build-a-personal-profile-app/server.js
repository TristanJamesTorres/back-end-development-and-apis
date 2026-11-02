const express = require("express");

const app = express();
const PORT = 3000;

// Story 2: root path
app.get("/", (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// Story 3: hobbies
app.get("/hobbies", (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

// Story 4: skills
app.get("/skills", (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

// Story 5: JSON profile
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"],
  });
});

// Story 1: listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
