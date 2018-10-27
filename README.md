# walletSystem
localhost:3000 
Deposit, Withdraw, FundTransfer, PayBills, Working but need to log in valid Account Still Working on validation
Transaction History Still on Work 

Try APIS
PUT
localhost:3000/api/process/withdraw
 -H 'content-type: application/json' 
 {
  "withdraw" :1000
 }
 
 PUT
 localhost:3000/api/process/deposit
 -H 'content-type: application/json' 
 {
  "debit" :1000
 }

PUT
 localhost:3000/api/process/fundTransfer
 -H 'content-type: application/json' 
 {
  "id" : "124",
  "amount" : 1000
 }
 
 PUT
  localhost:3000/api/process/payBills
 -H 'content-type: application/json' 
 {
  "amount" : 1000,
  "recipient" : "Meralco"
 }
 
 GET
 localhost:3000/api/process/balance

GET
 localhost:3000/api/process/history 
