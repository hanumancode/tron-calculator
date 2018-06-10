// var is ES5
// const and let is ES6

const trx = 3.5;
const trxUsdBought = 1000;
const trxUsdNow = 12000;

const invested = trx * trxUsdBought;
const current = trx * trxUsdNow;

const profit = current - invested;
const growth = (profit / invested) * 100;

let message = "";

if (profit > 0) { 
  message = 'You made a profit of ' + profit + ' ' + 'USD';
} else if (profit < 0) {
  message = 'You made a loss of ' + profit + ' ' + 'USD';
} else {
  message = 'You\'re at breakeven';
}

console.log(message);
