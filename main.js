let closeBtn = document.querySelector('#close-hamburger');
let openBtn = document.querySelector('#hamburger-btn');

//Close the hamburger menu
closeBtn.addEventListener('click', () => {
  console.log('close');
  document.getElementsByClassName('mobile-nav')[0].style.display = 'none';
});

//Open the hamburger menu
openBtn.addEventListener('click', () => {
  console.log('open');
  document.getElementsByClassName('mobile-nav')[0].style.display = 'block';
});