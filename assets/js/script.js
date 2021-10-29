/*===== MENU SHOW =====*/
const toggle = document.querySelector('#nav-toggle');
const menu = document.querySelector('#nav-menu');

function showMenu() {
    menu.classList.toggle('show');
}

toggle.addEventListener('click', showMenu);

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Remove a class active existe e depois adiciona ao link que foi clicado
    navLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');

    // Remove a class show do menu, ou seja, o menu irá fechar
    menu.classList.remove('show');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));
