const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const app = express();
const axios = require('axios');
const dateTime = require('node-datetime');
const dt = dateTime.create();
global.dateTime = dt.format('Y-m-d H:M:S');
const signInRouter = require('./server/routers/signInRouter');
const processRouter = require('./server/routers/processRouter');
const signUpRouter = require('./server/routers/signUpRouter');
const indexRouter = require('./server/routers/indexRouter');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) =>{
	req.viewModel ={
		title : 'Coins.Purse'
	};
	next()
});
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use('/',indexRouter);
app.use('/api/signIn',signInRouter);
app.use('/api/process',processRouter);
app.use('/api/signUp',signUpRouter);
app.use('/openAccount',indexRouter);

app.listen(port,(err) =>{
	if(err){
		return console.log(err);
	}
	console.log(`Listening to ${port}...`);
});