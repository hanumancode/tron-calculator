// var is ES5
// const and let is ES6

const trx = 3.5;
const trxUsdBought = 10000;
const trxUsdNow = 12000;

const invested = trx * trxUsdBought;
const current = trx * trxUsdNow;

const profit = current - invested;
//const growth = (profit / invested) * 100;

const growth = calcGrowth(invested, current);

function calcGrowth(pastValue, currentValue){

  const g = ((currentValue - pastValue) / pastValue) * 100;

  return g;

}

let message = "";

if (profit > 0) { 
  //message = 'You made a profit of ' + profit + ' ' + 'USD';
  message = `You made a profit of ${profit} (${growth}%)`;
} else if (profit < 0) {
  //message = 'You made a loss of ' + profit + ' ' + 'USD';
  message = `You made a loss of ${profit} (${growth}%)`;
} else {
  message = 'You\'re at breakeven';
}

console.log(message);
