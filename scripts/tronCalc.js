// var is ES5
// const and let is ES6

const trx = 3.5;
const trxUsdBought = 1000;
const trxUsdNow = 12000;

const invested = trx * trxUsdBought;
const current = trx * trxUsdNow;

const profit = current - invested;
const growth = (profit / invested) * 100;

/*
console.log('amount of trx bought in USD value:', '$' + invested);
console.log('trx value now', '$' + current);
console.log('profit = ', '$' + profit);
console.log('growth = ', growth + '%');
*/

if (profit > 0) { 
  console.log('You made a profit of ' + profit + ' ' + 'USD');
} else if (profit < 0) {
  console.log('You made a loss of ' + profit + ' ' + 'USD');
} else {
  console.log('You\'re at breakeven');
}

