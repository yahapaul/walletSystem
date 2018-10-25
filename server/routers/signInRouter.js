const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./users.json');

router.post('/api/SignIn',(req,res,next) =>{
	console.log('Log-In page only');
	next();
	},(req,res) =>{
		const users = store.get('Users');
		const inputUser ={
			id: req.body.id,
			pin: req.body.pin

		};
		for(var i = 0; i < users.length; i++) {
			if(inputUser.id === users[i].id && inputUser.pin === users[i].pin){
				console.log('Successfully LogIn');
				res.send('Successfully Log In');
			}
			else
				res.send('Log In Failed');
		}

		
});

module.exports = router;
