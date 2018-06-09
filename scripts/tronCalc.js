var trx = 3.5;
var trxUsdBought = 7500;
var trxUsdNow = 12000;

var invested = trx * trxUsdBought;
var current = trx * trxUsdNow;

console.log("amount of trx bought in USD value:", '$' + invested);
console.log("trx value now", '$' + current);

