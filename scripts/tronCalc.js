// var is ES5
// const and let is ES6

const trx = 3.5;
const trxUsdBought = 7500;
const trxUsdNow = 12000;

const invested = trx * trxUsdBought;
const current = trx * trxUsdNow;

console.log("amount of trx bought in USD value:", '$' + invested);
console.log("trx value now", '$' + current);

