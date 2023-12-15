require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://srjsachan:8858856132@portfolioprojects.1mx7zhr.mongodb.net/fitness?retryWrites=true&w=majority")

module.exports = connection;