const express = require('express');
const router = express.Router();
const Author = require('../models/authors');
//INDEX
router.get('/', (req,res) => {
	Author.find({}, (err, foundAuthors) => {
	res.render('authors/index.ejs', {
		authors: foundAuthors
		});
	});
});

//NEW
router.get('/new', (req,res) => {  /// SHOW route HAS to be AFTER new, or you'll NEVER hit NEW
	res.render('authors/news.ejs');
})

router.get('/:id', (req,res) => {
	Author.findById(rec.params.id, (err, foundAuthor) =>{
		res.render('authors/show.ejs', {
			author: foundAuthor
		});
	});
});
//EDIT
router.get('/:id/edit', (req,res) => {
	Author.findById(req.params.id, (err, foundAuthor) => {
		res.sender('authors/edit.ejs', {
			author: foundAuthor
		});
	});
});

router.post('/', (req,res) => {
	console.log(req.body)
	Author.create(rec.body, (err, createdAuthor) => {
		console.log(createdAuthor, 'this is the createdAuthor')
		res.redirect('/authors');
	});
	res.send('server recieved request')
});

router.delete('/:id', (req,res) => {
	Author.findByIdAndRemove(req.params.id, (err, deletedAuthor) => {
		console.log(deletedAuthor, 'this is deletedAuthor');
		res.redirect('/authors')
	})
});


module.exports = router;
