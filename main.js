var Offer = document.querySelector('.offer');
const OfferBox = document.getElementById('offer-box');
const loader = document.getElementById('loader');
const addBtn = document.querySelector('.NewDiv');
var sider = document.querySelector('.banner');

Offer.innerHTML = '20%';
OfferBox.style.display = 'block';


/*function addnew() {
  console.log('click');
  const NewDivBox = document.createElement('div');
  NewDivBox.classList.add('div-shadow');
  document.body.appendChild(NewDivBox);
}*/

window.addEventListener('load', function() {
  loader.style.display = "none";
  console.log('loaded');
});

