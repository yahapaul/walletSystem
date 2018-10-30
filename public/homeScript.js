(function(){
	var balance = document.getElementById('balance');
    axios.get('http://localhost:3000/api/process/balance')
   	  .then(function(res){
        //alert(res.data);
        balance.textContent = res.data;
      })
      .catch(function(err) {
        		//user = [];
      });

})();
