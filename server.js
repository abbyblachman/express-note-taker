
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require('fs');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA 
// ==============================================================

var dbJson = [
  {
    note: "Class notes", 
    noteText: "Pay attention in class"
  }
];

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
  });

// Basic route that sends the user first to the AJAX Page

// Displays all notes

// Displays a single note, or returns false

// Create New Characters - takes in JSON input
  // req.body hosts is equal to the JSON post sent from the user
  app.get("/api/notes/:note", function(req, res) {
    var chosen = req.params.note;
  
    console.log(chosen);
  
    for (var i = 0; i < note.length; i++) {
      if (chosen === note[i].routeName) {
        return res.json(dbJson[i]);
      }
    }
  
    return res.json(false);
  });
  // This works because of our body parsing middleware

  app.get("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    return res.json(dbJson)
  });

  app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newNote.routeName = newNote.note.replace(/\s+/g, "").toLowerCase();
  
    console.log(newNote);
  
    dbJson.push(newNote);
  
    res.json(newNote);
  });


// Using a RegEx Pattern to remove spaces from newCharacter
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

