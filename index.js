const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const app = express();
const signInRouter = require('./server/routers/signInRouter');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/',signInRouter);

app.listen(port,(err) =>{
	if(err){
		return console.log(err);
	}
	console.log(`Listening to ${port}...`);
});