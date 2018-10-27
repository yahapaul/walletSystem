(function(){

	console.log("andito?");
	var withdraw = document.getElementById('withdraw');
	//console.log(transfer);
	withdraw.addEventListener('click',function(event){
		console.log("pumasok");
		//var iid = document.getElementById('id');
		var amount = document.getElementById('amount');
		//console.log(iid.value);
		//console.log(aamount.value);
		axios.put('http://localhost:3000/api/process/withdraw',{ withdraw: amount.value})
			.then(function(res){
				alert("Withdraw Success");
				amount.value = "";
			})
			.catch(function(err){
				console.log(err);
			});
	});//end of var createAccount

})();