import { createElement } from '../utils/utils.js';
import logoImg from "../assets/logo.svg";

function createFooter() {
    
    const body = document.querySelector('body');
    
    //Footer Section
    const footer = createElement('footer', 'footer__section');
    body.appendChild(footer);

    //Logo
    const logo = createElement('img', 'footer__logo')
    logo.src = logoImg
    footer.appendChild(logo)

    //Footer text
    const footerText = createElement('p', 'footer__text')
    footerText.textContent = 'copyright 2023. All rights reservered'
    footer.appendChild(footerText);
}

function loadFooter() {
    createFooter();
}


export default loadFooter