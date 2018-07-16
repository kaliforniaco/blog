const mongoose = require('mongoose');

//create out db and connect
mongoose.connect('mongodb://localhost/blog');

mongoose.connection.on('connected', () => {
	console.log('goose is connected');
});

mongoose.connection.on ('error', (err) => {
	console.log('goose error');
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoose disco');
});