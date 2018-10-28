(function(){
	var history =[];
	var historyTable = document.getElementById('historyTable');
	axios.get('http://localhost:3000/api/process/transactionHistory')
		.then(function(res){
			var self = this;
			history = res.data;
			renderHistory(history);
			//alert(history[0].details);
		})
		.catch(function(err){
			console.log(err);
		});

	function renderHistory(history) {
		//console.log(history);
    	historyTable.innerHTML = '';
    	//var headers = ['ID', 'Title', 'Description'];
    	//var thead = document.createElement('tr');
    	var headers = ['TimeStamp', 'Transaction Type', 'Transaction ID', 'Action'];
    	var thead = document.createElement('tr');
    		headers.forEach(function(header) {
      		var td = document.createElement('th',scope="col");
      		td.textContent = header;
      	thead.append(td);
    	});

    	historyTable.append(thead);
    	history.forEach(function(histo){
    		var tr = document.createElement('tr');
    	  	var tdTime = document.createElement('td');
    	  	var tdType = document.createElement('td');
    	  	var tdDetails = document.createElement('td');
    	  	var tdAction = document.createElement('td');
    	  	tdTime.textContent = histo.dateTime;
    	  	tdType.textContent = histo.transType;
    	  	tdDetails.textContent = histo.transID;
    	  	tdAction.textContent = histo.details;

    	  	tr.append(tdTime);
    	  	tr.append(tdType);
    	  	tr.append(tdDetails);
    	  	tr.append(tdAction);
    	  	historyTable.append(tr);
    	});
  }

})();