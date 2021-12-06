
const btnCart = document.getElementById('btnCart');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const total = document.querySelector('.modal-sum');
let fullPrice;
const rows = document.querySelectorAll('.row');

const modalOpen = function() {
  modal.classList.toggle('modal--close');
}

const modalClick = function(event) {
  if (event.target == modal) {
    modalOpen();
  }
}

const incSum = function(item, i, arr) {
  let sumBlock = item.querySelector('.price');
  let sum = +sumBlock.textContent;
  fullPrice += sum;
}

const getFullPrice = function() {
  fullPrice = 0;
  const rows = modal.querySelectorAll('.row');
  rows.forEach(incSum);
  total.textContent = fullPrice;
}

const setButtonClick = function(item, i, arr) {
  let priceBlock = item.querySelector('.price');
  let price = +priceBlock.textContent;
  let сountBlock = item.querySelector('.count');
  let count = +сountBlock.textContent;
  let plusButton = item.querySelector('.plus-button');
  let minusButton = item.querySelector('.minus-button');

  plusButton.addEventListener('click', function() { 
    count += 1;
    сountBlock.textContent = count;
    priceBlock.textContent = count * price;    
    getFullPrice();
  });
  
  minusButton.addEventListener('click', function() { 
    if (count > 0) {
      count -= 1;
    }
    сountBlock.textContent = count;
    priceBlock.textContent = count * price;    
    getFullPrice();
  });
}

btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);
modal.addEventListener('click', modalClick);
rows.forEach(setButtonClick);
getFullPrice();