(function(){

	console.log("andito?");
	var transfer = document.getElementById('transferFund');
	console.log(transfer);
	transfer.addEventListener('click',function(event){
		console.log("pumasok");
		var iid = document.getElementById('id');
		var aamount = document.getElementById('amount');
		console.log(iid.value);
		console.log(aamount.value);
		axios.put('http://localhost:3000/api/process/fundTransfer',{ id: iid.value, amount: aamount.value})
			.then(function(res){
				alert('Transfer Success');
				iid.value ='';
				aamount.value ='';
			})
			.catch(function(err){
				console.log(err);
			});
	});//end of var createAccount

})();