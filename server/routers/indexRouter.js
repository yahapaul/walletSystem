const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');
global.ID ="";
// Initializes the data-2.json file with notes as its initial value if empty
const store = new SimpleJsonStore('./data-2.json', { notes: [] });

router.get('/', function getIndexPage(req, res) {
  //let viewModel = req.viewModel;
  // We can extend the viewModel and add new properties
  // e.g. viewModel.appName = 'Cardo';
  //      viewModel.count = 10;
  //      viewModel.choices = ['apple', 'orange', 'grapes'];
  // Read more: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
  //viewModel.notes = store.get('notes');
  res.render('login.pug'); 
});

router.get('/openAccount', function gethomePage(req,res){
	res.render('openAccount.pug');
});

router.get('/deposit', function gethomePage(req,res){
	res.render('deposit.pug');
});

router.get('/home', function gethomePage(req,res){
	res.render('home.pug');
});

router.get('/withdraw', function gethomePage(req,res){
	res.render('withdraw.pug');
});

router.get('/fundTransfer', function gethomePage(req,res){
	res.render('fundTransfer.pug');
});

router.get('/billsPayment', function gethomePage(req,res){
	res.render('billsPayment.pug');
});

router.get('/transactionHistory', function gethomePage(req,res){
	res.render('transactionHistory.pug');
});

module.exports = router;