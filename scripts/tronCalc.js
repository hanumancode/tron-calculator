// Troncoin Calculator

const calcGrowth = (pastValue,currentValue) => (currentValue - pastValue) / pastValue * 100;


document.querySelector('.investment_btn').addEventListener('click', () => {

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

// console.log('trx bought value', trxUsdBought);
// console.log('trxUsdNow', trxUsdNow);

// console.log('trx', trx);


// 3. write result to the UI
let message = "";

const resultField = document.querySelector('.result');

if (profit > 0) { 
  message = `You made a profit of $${profit} (${growth}%)`;
  resultField.style.color = 'green';
} else if (profit < 0) {
  message = `You made a loss of $${profit} (${growth}%)`;
  resultField.style.color = 'red';
} else {
  message = 'You\'re at breakeven';
  resultField.style.color = 'black'; 
}

document.querySelector('.result').textContent = message;

});

// load TRX price to input number field after data is loaded.

window.addEventListener('load', function(){

  setTimeout(function() {
    console.log("all assets are loaded");

    trx = document.getElementById('current_trx_price');
    console.log(trx.attributes.placeholder);

    trx_price_coinmarketsource = document.querySelectorAll('span')[1].innerText;
    
    console.log('trx_price_coinmarketsource', trx_price_coinmarketsource);

    let length = 8;
    let trimmedTrx = trx_price_coinmarketsource.substring(0, length);
    console.log (typeof(Number(trimmedTrx)), trimmedTrx);

    trx.value = trimmedTrx;

  },1000)

});
