// Troncoin Calculator

const trx = 3.5;
const trxUsdBought = 10000;
const trxUsdNow = 12000;

const invested = trx * trxUsdBought;
const current = trx * trxUsdNow;

const profit = current - invested;
//const growth = (profit / invested) * 100;

const growth = calcGrowth(invested, current);

// function declaration to calculate growth for investment
function calcGrowth(pastValue, currentValue){

  const g = ((currentValue - pastValue) / pastValue) * 100;

  return g;

}


// function expression ES5 version
const calcGrowth2 = function(pastValue, currentValue) {
  return (currentValue - pastValue) / pastValue * 100
}

const growth2 = calcGrowth2(5000,5500);
console.log('calcGrowth2 ES5 version:', growth2);

// ES6 version arrow function
const calcGrowth3 = (pastValue,currentValue) => (currentValue - pastValue) / pastValue * 100;
const growth3 = calcGrowth3(20, 60);
console.log('calcGrowth3 ES56 version:', growth3);


// profit, loss, breakeven message
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


// DOM manipulation: selecting elements / handling events

document.querySelector('.investment_btn').addEventListener('click', function(){

console.log('ok investment_btn clicked')
});



















