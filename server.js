const express = require('express');
const app = express();

require('./db/db');



const authorsContoller = require('./controllers/authors.js');
app.use('/authors', authorsController);


app.get('/', (req,res) => {
	res.render('index.ejs')
})




app.listen(3000, () => {
	console.log('p3000 ok>');
});