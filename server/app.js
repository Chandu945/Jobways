const express = require("express");
const cors = require("cors");

const app = express();

//allowing cross origin resource sharing
app.use(cors());

//middlewares
//to parse json data
app.use(express.json());
//to parse url encoded data;
app.use(express.urlencoded({ extended: true }));

const mailerRoutes = require("./src/routes/mailer");
app.use("/comment", mailerRoutes);

module.exports = app;
