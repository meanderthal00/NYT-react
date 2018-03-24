const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const articleSchema = new Schema({
	title: {
		type: String,
		trim: true,
		
	},

	date: {
		type: Date,
		required: true

	},

	url: {
		type: String,
		required: true
	}
});
//add more models as you create them
const Article = mongoose.model("Article", articleSchema);
 module.exports = Article
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

// User.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', User);