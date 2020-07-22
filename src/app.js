//require necessary modules
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//execute Express app
const app = express();

//require error handler
const { errorHandler } = require("./controllers/errors");

//require database

//configure modules usage
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

//configure static files serving
app.use("/static/avatars", express.static(path.join(__dirname, "../public")));

//use routes

//catch and forward to error handler
app.use((req, res, next) => {
	let err = new Error("Page Not Found");
	err.status = 404;
	next(err);
});

//use error handler
app.use(errorHandler);

//export express app
module.exports = app;
