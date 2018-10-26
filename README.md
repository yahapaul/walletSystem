# walletSystem
!Issue axios put not working I dont know why :((
localhost:3000 -> access login page working but no validation if user and password is invalid
localhost:3000/home -> homepage
Deposit, Withdraw, FundTransfer -> Axios put Issue
transacHistory, billsPayment -> Still on work
Open Account -> Working no Issue, you can check users.json if your account is added

ALL API is WORKING:
for testing go to indexRouter.js -> declare or set value for (global.ID) look for valid ID on users.json or try (global.ID = '123')
try it postman
NOTE!!!!!!!! don't forget to go to indexRouter.js declare or set value global.ID = '123'; 
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
