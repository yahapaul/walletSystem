const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');
const fs = require('fs');
const store = new SimpleJsonStore('./users.json');
let ws = fs.createWriteStream('secret.txt');

router.post('/',(req,res,next) =>{
	console.log('Log-In page only');
	next();	
	},(req,res) =>{
		const users = store.get('Users');
		let check = false;
		const inputUser ={
			id: req.body.id,
			pin: req.body.pin,

		};
		console.log(inputUser);
		for(var i = 0; i < users.length; i++) {
			if(inputUser.id == users[i].id && inputUser.pin == users[i].pin){
				console.log('Successfully LogIn');
				ws.write(inputUser.id);
				ws.end();
				check = true;
				//alert('Successfully Login');
				//global.ID = inputUser.id;
				break;
			}
		}
	res.send(check);
});


module.exports = router;
