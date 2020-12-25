require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.get("/", function (req, res) {
	res.json({
		ok: true,
		msg: "GET Method - Cool!",
	});
});

app.post("/", function (req, res) {
	res.json({
		ok: true,
		msg: "POST Method - Cool!",
	});
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Express Server PORT[${port}]--[ONLINE]-------------`.yellow);
});

module.exports = app;
