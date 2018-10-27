(function(){
	var signInForm = document.getElementById('LogIn');
	 signInForm.addEventListener('click',function(event){
		//event.preventDefault();
    console.log("ew");
		 var nameArea = document.getElementById('name');
     var passwordArea = document.getElementById('password');
   		 axios.post('http://localhost:3000/api/signIn', {id: nameArea.value, pin : passwordArea.value})
   		 	.then(function(res) {
          if(res.data === true){
            alert("Secessfully Login");  
          }
          else
            alert("Invlid ID or Pin");
          
          global.ID = nameArea.value;
    		  console.log(res.data);
      	})
      	.catch(function(err) {
        		//user = [];
      	});
  }); 	

})();
