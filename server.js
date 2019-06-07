const fs = require("fs");
const path = require("path");
const express = require("express");
const api = require("./api")
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "makeRes.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
  });

  app.get("/api/reservations", function(req, res) {
    console.log(api)
    var test = api.readDB();
   console.log(test);
  });

  