// Troncoin Calculator

const calcGrowth = (pastValue,currentValue) => (currentValue - pastValue) / pastValue * 100;


document.querySelector('.investment_btn').addEventListener('click', function(){

// logic for the callback function
// 1. select and read data from the UI

const trxUsdBought = document.querySelector('.price_input_bought').value;
const trxUsdNow = document.querySelector('.price_input_now').value;
const trx = document.querySelector('.investment_trx').value;

// 2. calculate the profits

const invested = trxUsdBought * trx;
const current = trx * trxUsdNow;
const profit = current - invested;
const growth = calcGrowth(invested, current);


console.log('trx bought value', trxUsdBought);
console.log('trxUsdNow', trxUsdNow);

console.log('trx', trx);


// 3. write result to the UI
let message = "";

if (profit > 0) { 
  message = `You made a profit of $${profit} (${growth}%)`;
  document.querySelector('.result').style.color = 'green';
} else if (profit < 0) {
  message = `You made a loss of $${profit} (${growth}%)`;
  document.querySelector('.result').style.color = 'red';
} else {
  message = 'You\'re at breakeven';
  document.querySelector('.result').style.color = 'black'; 
}

document.querySelector('.result').textContent = message;

});


















