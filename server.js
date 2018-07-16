const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}))

const authorsContoller = require('./controllers/authors.js');
app.use('/authors', authorsController);


app.get('/', (req,res) => {
	res.render('index.ejs')
})

router.get('/new', (req,res) => {.  /// SHOW route HAS to be AFTER new, or you'll NEVER hit NEW
	res.render('authors/news.ejs');
})

route.get('/:id', (req,res) => {
	Author.fineById(rec.params.id, (err, foundAuthor) =>{
		res.render('authors/show.ejs', {
			author. foundAuthor
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



app.listen(3000, () => {
	console.log('p3000 ok>');
});