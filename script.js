const burger = document.getElementById('burger');
const navUL = document.getElementById('ulmenu');

burger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});
