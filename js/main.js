
const btnCart = document.getElementById('btnCart');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');

const modalOpen = function() {
  modal.classList.toggle('modal--close');
}

const modalClick = function(event) {
  if (event.target == modal) {
    modalOpen();
  }
}

btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);
modal.addEventListener('click', modalClick)
 