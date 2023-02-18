const menuBtn = document.querySelector('.menu-btn');
const navLink = document.getElementById('menu');

menuBtn.addEventListener('click', ()=>{
    navLink.classList.toggle('active')
})