//Node Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Module Dependences
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

//Sets up Express app to handle Parsing
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
apiRoutes(app);
htmlRoutes(app);

// Start the Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
