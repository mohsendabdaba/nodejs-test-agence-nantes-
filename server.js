const db = require("./app/models");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const jwt = require('./app/config/jwt');
const errorHandler = require('./app/config/error-handler');
var passport = require('passport')




// use JWT auth to secure the api
app.use(jwt());


// global error handler
app.use(errorHandler);



app.use(cors());

// parse requests of content-type 
app.use(bodyParser.json());

// parse requests of content-type 
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


// api routes
app.use('/users', require('./app/controllers/users.controller'));


app.use(express.static(__dirname + '/static'));
require("./app/routes/response.routes")(app);

app.use(express.static(__dirname + '/static'));
require("./app/routes/question.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  //run();
});







