const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// configuring environmental variables
dotenv.config();

const port = process.env.PORT || 8080;
const con = process.env.NODE_ENV;

app.listen(port, () => console.log(`Server is running on port: ${port}......`));
