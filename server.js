const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static(`${__dirname}/client/build`));

app.set("port", process.env.PORT || 3001);

// Add routes, both API and view
app.use(routes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/finBeg";
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
  console.log("ENV", process.env.NODE_ENV);
});
