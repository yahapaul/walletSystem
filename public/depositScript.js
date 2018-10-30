(function(){
	var pageTitle = document.getElementById('pageTitle');
	//var notesTable = document.getElementById('notesTable');
	//console.log(pageTitle);
  var depositForm = document.getElementById('deposit');
   depositForm.addEventListener('click',function(event){
    //event.preventDefault();
    var amountArea = document.getElementById('amount');
    axios.put('http://localhost:3000/api/process/deposit', { debit : amountArea.value})
      .then(function(res) {
        if(res.data === true){
           alert("Deposit Successful");
        }
        else
          alert("Invalid Deposit");
        amountArea.value =null;
      })
      .catch(function(err) {
            //user = [];
      });
    });   

})();