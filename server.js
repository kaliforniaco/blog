const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const authorsContoller = require('./controllers/authors.js');
app.use('/authors', authorsController);





app.listen(3000, () => {
	console.log('p3000 ok>');
});