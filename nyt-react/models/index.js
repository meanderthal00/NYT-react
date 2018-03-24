// import { Schema } from "mongoose";

const mongoose = require("mongoose");
const nytreact = mongoose.nytreact;

module.exports = {
	User:require("./User.js")
}

const Articles = new Schema({
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
const Article = mongoose.model("Article", Articles);
 module.exports = Article