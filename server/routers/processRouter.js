const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');
const store = new SimpleJsonStore('./users.json');
const uniqid = require('uniqid');
let lth = 0;

router.put('/deposit',(req,res) =>{
	const input = req.body.debit;
	const users = store.get('Users');
	let respo = 0;
	global.ID =123;
	let temp ={};
	if(global.ID !== null){
		for(let i =0; i < users.length; i++){
			//console.log("PUMASOOOOOK" + users[i].history[0]);
			lth = (users[i].history.length -1 < 0 ? 0 : users[i].history.length);
			if(users[i].id === global.ID){
				users[i].debit += input;
				respo = users[i].debit;

				users[i].history[lth]= {
					transID : uniqid(),
					transType : 'Deposit',
					details : `Deposit ${input}`,
					dateTime : global.dateTime
				};

				//console.log(users[i].history[lth].transID);
				console.log(users[i].debit);
				break;
			}
		}
		//console.log(users[0].history[0].transID);
		store.set('Users',users);	
	}//end of 8 	
	res.json(users);	

});//end of 7

router.put('/withdraw',(req,res) =>{
	if(global.ID !== null){
		const users = store.get('Users');
	 	const input = req.body.withdraw;
	 	let respo = 0;
		for(let i =0; i < users.length; i++){
			lth = (users[i].history.length -1 < 0 ? 0 : users[i].history.length);
			if(users[i].id === global.ID){	
				// console.log('PUMASOOOOOK sa una'+ input +" " + users[i].debit);
				if(input < users[i].debit){
					// console.log("PUMASOOOOOK sa pangalawa");
					users[i].debit -= input;
					//respo = users[i].debit;

					users[i].history[lth]= {
						transID : uniqid(),
						transType : 'Withdrawal',
						details : `withdraw ${input}`,
						dateTime : global.dateTime
					};

					console.log('Withdraw Success');
					break;	
				}
				else 
					respo = users[i].debit;
					console.log('Invalid Withdrawal');	
			}
		}//end of 33
		// console.log(users[0].debit);
		store.set('Users',users);
		res.json(users);	
	}//end of 28

});//end of 27

router.get('/balance',(req,res) =>{
	if(global.ID !== null){
		const users = store.get('Users');
		user = users.find(users => users.id === global.ID);
		console.log(user.debit);
	}
	res.json(user.debit)
});

router.put('/fundTransfer',(req,res) =>{
	const users = store.get('Users');
	let checker = false;
	if(global.ID !== null){
		let input ={
			id : req.body.id,
			amount : req.body.amount
		}

		for(var i = 0; i < users.length; i++){
			if(global.ID === users[i].id && users[i].id !== input.id){
				lth = (users[i].history.length -1 < 0 ? 0 : users[i].history.length);
				if(users[i].debit > input.amount){
					users[i].debit -= input.amount;
					checker = true;

					users[i].history[lth]= {
						transID : uniqid(),
						transType : 'FundTransfer',
						details : `Transfer ${input.amount} to ${input.id}`,
						dateTime : global.dateTime
					};
					break;
				}
				else
					console.log('Invalid Transfer, Invalid Amount');
					break;
			}
		}
		for (var i = 0; i < users.length; i++) {
			if(checker === true){
				if(users[i].id === input.id){
					users[i].debit += input.amount;
					checker = false;
					console.log('Transfer Sucess');
					break;
				}
			}
			else
				console.log('Transfer failed, Invalid ID');
				break;
		}
	}
	store.set('Users',users);
	res.json(users);

});

router.put('/payBills',(req,res)=>{
	if(global.ID !== null){
		const users = store.get('Users');
	 	const input = {
	 		amount : req.body.amount,
	 		recipient : req.body.recipient
	 	};

		for(let i =0; i < users.length; i++){
			lth = (users[i].history.length -1 < 0 ? 0 : users[i].history.length);
			if(users[i].id === global.ID){	
				// console.log('PUMASOOOOOK sa una'+ input +" " + users[i].debit);
				if(input.amount < users[i].debit){
					// console.log("PUMASOOOOOK sa pangalawa");
					users[i].debit -= input.amount;
					//respo = users[i].debit;

					users[i].history[lth]= {
						transID : uniqid(),
						transType : 'Pay Bills',
						details : `Payed ${input.amount} to ${input.recipient}`,
						dateTime : global.dateTime
					};

					console.log('Payment Success');
					break;	
				}
				else 
					//respo = users[i].debit;
					console.log('Invalid Payment');	
			}
		}//end of for 138
		// console.log(users[0].debit);
		store.set('Users',users);
		res.json(users);	
	}//end of if 134
});

router.get('/history',(req,res) =>{
	if(global.ID !== null){
		const users = store.get('Users');
		user = users.find(users => users.id === global.ID);
		console.log(user.history);
	}
	res.json(user.history)
});

module.exports = router;