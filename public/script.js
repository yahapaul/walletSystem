(function(){
	var user = [];
  global.ID ='';
	var pageTitle = document.getElementById('pageTitle');
	//var notesTable = document.getElementById('notesTable');
	console.log(pageTitle);

	var signInForm = document.getElementById('signIn');
	signInForm.addEventListener('click',function(event){
		//event.preventDefault();
		 var nameArea = document.getElementById('name');
   		 var passwordArea = document.getElementById('password');
   		 axios.post('http://localhost:3000/api/signIn', {id: nameArea.value, pin : passwordArea.value})
   		 	.then(function(res) {
            global.ID = nameArea.value;
    		    console.log(res.data);
      		})
      		.catch(function(err) {
        		//user = [];
      		});
  }); 	

})();
