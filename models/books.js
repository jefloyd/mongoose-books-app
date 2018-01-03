var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema ({
	title: String,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author'
	},
	image: String,
	releaseDate: String
});


//define the Book model based on the schema
var Book = mongoose.model('Book', BookSchema);

//exporting it so it can be used in server.js and elsewhere
module.exports = Book;