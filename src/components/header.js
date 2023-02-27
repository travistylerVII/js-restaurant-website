import { createElement } from '../utils/utils.js'
import logoImg from "../assets/logo.svg";

function createHeader () {
    
    const body = document.querySelector('body');

    //Create Header Section
    const headerSection = createElement('header', 'header__section');
    body.appendChild(headerSection);

    //Create Header Container
    const headerContainer = createElement('div', 'header__container')
    headerContainer.classList.add('container');
    headerSection.appendChild(headerContainer);

    //Create Logo Section & Logo
    const headerLogo = createElement('div', 'header__logo')
    headerContainer.appendChild(headerLogo);
    
    const logo = createElement('img', 'logo')
    logo.src = logoImg;
    headerLogo.appendChild(logo);

    //Create Menu Section & Navagation
    const headerMenu = createElement('nav', 'header__menu')
    const menuHome = createElement('a', 'menu__home');
    const menuMenu = createElement('a', 'menu__menu');
    const menuContact = createElement('a', 'menu__contact');
    headerContainer.appendChild(headerMenu);
    headerMenu.appendChild(menuHome);
    headerMenu.appendChild(menuMenu);
    headerMenu.appendChild(menuContact);
    menuHome.textContent = 'Home';
    menuMenu.textContent = 'Menu';
    menuContact.textContent = 'Contact'

}

function loadHeader() {
    createHeader();
}

export default loadHeader;