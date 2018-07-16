const express = require('express');
const router = express.Router();
const Author = require('../models/authors');

router.get('/', (req,res) => {
	Author.find({}, (err, foundAuthors) => {
	res.render('authors/index.ejs', {
		authors: foundAuthors
		});
	});
});




module.exports = router;
