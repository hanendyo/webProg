const menuToggle = document.querySelector('.menuToggle input');
const navUl = document.querySelector('nav ul');


menuToggle.addEventListener('click', function (){
    navUl.classList.toggle('slide')
});