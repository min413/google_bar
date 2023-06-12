const toogleBtn = document.querySelector('.google_toogleBtn');
const menu = document.querySelector('.google_menu');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})