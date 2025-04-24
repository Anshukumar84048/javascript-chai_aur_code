const accountId = 456123
let accountEmail = "anshukumar84048@gmail.com"
var accountPassword ="12345"
accountCity = "Kolkata"
let accountState;

//accountId = 2 //not allowed

accountEmail = "ac@ac.com"
accountPassword = "54321"
accountCity = "Patna"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);