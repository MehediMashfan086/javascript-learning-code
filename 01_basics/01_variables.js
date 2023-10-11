const accountId = 11162086
let accountEmail = "mehedihasan62086@gmail.com"
var accountPassword = "12345678"
accountCity = "Dhaka"
let accountState;

// accountId = 2

accountEmail = "mh@gmail.com"
accountPassword = "456"
accountCity = "Rajshahi"

/* 
    Do not use var keywords,
    because of issues of block scope and functional scope.
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);