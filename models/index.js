var mongoose = require("mongoose");

//connecting the Database
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./book.js");