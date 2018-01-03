var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema ({
	name: String,
	alive: Boolean,
	image: String
});


// create model of schema
 var Author = mongoose.model("Author", AuthorSchema);


// exporting it so it can be required elsewhere
 module.exports = Author;