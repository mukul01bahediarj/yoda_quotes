const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./db");
const Router = require("./routes/route");
const app = express();
const request = require("request");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());

const PORT=4000;

Router(app);
app.listen(PORT,() => {
    console.log(`server running on port ${PORT}.`);
})

