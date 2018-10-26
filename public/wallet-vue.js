(function(){
	var walletVue = new Vue({
		el: '#walletVue',
		data:{
			id : null,
			pin : null,
			debit : null,
			fullname : null,
			address : null,
			history : []
		},
		methods :{
			signIn: function(){
				var self = this;
				var payload ={
					id : self.name, 
					pin : self.password
				}
				axios.post('http://localhost:3000/api/signIn',payload)
					.then(function(res){
						console.log(res.data);
						console.log("pumasok ba dito?");
					})//end of .then
					.catch(function(err){
						console.log(err);
					});//end of .catch
				this.name = null;
				this.password =null;
			}
		}
	});	
})();