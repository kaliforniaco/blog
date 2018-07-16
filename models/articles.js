const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
	title: String
});

module.exports = mongoose.model('Article', articleSchema);

