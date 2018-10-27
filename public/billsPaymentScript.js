(function(){
  var recipient ='';

  var list =document.getElementById('list');
  var payBillForm = document.getElementById('payBill');
   payBillForm.addEventListener('click',function(event){
    console.log("wew");
    //event.preventDefault();
    if(document.getElementById('meralco').checked === true){
      recipient +=" " +document.getElementById('meralco').value;
    }
    else if(document.getElementById('manilaWater').checked === true){
      recipient +=" " +document.getElementById('manilaWater').value;
    }  
    else if(document.getElementById('pldt').checked === true){
      recipient +=" " +document.getElementById('pldt').value;
    }  
    else if(document.getElementById('philHealth').checked === true){
      recipient +=" " +document.getElementById('philHealth').value;
    }   
  console.log(recipient); 
    var amountArea = document.getElementById('amount');
    axios.put('http://localhost:3000/api/process/payBills', { amount : amountArea.value, recipient : recipient })
      .then(function(res) {
            alert('Payment Successfull');
            document.getElementById('meralco').checked = false;
            document.getElementById('pldt').checked = false;
            document.getElementById('manilaWater').checked = false;
            document.getElementById('philHealth').checked = false;
            amountArea.value =null;
            recipient ="";
      })
      .catch(function(err) {
            //user = [];
      });
    });   


})();