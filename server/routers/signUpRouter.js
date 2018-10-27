const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./users.json');
const rn = require('random-number');

const options = rn.generator({
	min : 100000,
	max : 999999,
	integer : true
});

router.post('/',(req,res,next) =>{
	const users = store.get('Users');	
	let genID = 0;
	console.log("pumasok ba dito?")
	let lth = users.length -1;

	//console.log(users[lth].id);
	//console.log("ganto kahaba" +"" +lth.length);
	if(lth -1 < 0){
		genID = 123;

	}
	 else
	 	genID = parseInt(users[lth].id);

	const input ={
		fullname : req.body.fullname,
		address : req.body.address
	}
	const data ={
		id : genID +1 +"",
		pin : options(),
		debit : 0,
		fullname : input.fullname,
		address : input.address,
		history: []
	};
	users.push(data);
	store.set('Users',users);
	res.json({id:data.id, pin:data.pin});
	//alert(`Successfully Signup your ID: ${data.id} Pin: ${data.pin} `);
});


module.exports = router;
