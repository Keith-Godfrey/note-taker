// Dependencies for this file
const express = require("express");
const path = require("path");
// Helper function for generating unique ids
const uuid = require('./helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend, readAndDelete } = require('./helpers/fsUtils');



const PORT = 3001;
const app = express();
// ------------------------------------------------------------------------
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static("public"));

// This view route is a GET route for the homepage
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// GET route to get all of the terms
app.get("/api/notes", (req, res) => res.json(termData));
// ------------------------------------------------------------------------
//routes for html files
app.get("/", (req, res) =>
    
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get("/api", (req, res) => res.json(termData));




app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
