(function(){

	console.log("andito?");
	var createAccount = document.getElementById('createAccount');
	//console.log(createAccount);
	createAccount.addEventListener('click',function(event){
		console.log("pumasok");
		var fullName = document.getElementById('fullName');
		var address = document.getElementById('address');
		console.log(fullName.value);
		console.log(address.value);
		axios.post('http://localhost:3000/api/signUp',{ fullname: fullName.value, address: address.value})
			.then(function(res){
				alert('Successfully Signup your ID:'+" "+ res.data.id +" "+"Pin:"+" "+ res.data.pin);
			})
			.catch(function(err){
				console.log(err);
			});
	});//end of var createAccount

})();