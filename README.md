# walletSystem
localhost:3000 
Need to Login a existing account, still workin on Log in validation.
All functions are working.

Try APIS NOTE!! open secret.txt and write valid ID eg.(123) or loog on users.json file
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
