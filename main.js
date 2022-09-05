var OfferCard = document.getElementById('offer-card', 'box' );
const OfferBox = document.getElementById('offer-box');
const loader = document.getElementById('loader');
const addBtn = document.querySelector('.NewDiv');

OfferCard.innerHTML = '20%';
OfferBox.style.display = 'none';

setTimeout(function() {
  loader.style.display = "none";
}, 3000);
setTimeout(function() {
  console.log("loaded");
}, 3100);


addBtn.addEventListener('click', addnew);

function addnew() {
  console.log('click');
  const NewDivBox = document.createElement('div');
  NewDivBox.classList.add('div-shadow');
  document.body.appendChild(NewDivBox);
}
