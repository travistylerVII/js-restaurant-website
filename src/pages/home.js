import { createElement } from '../utils/utils.js'

const body = document.querySelector('body');

const createHero = () => {

    
    //HERO SECTION
    const heroSection = createElement('section', 'hero__section');
    body.appendChild(heroSection);

    const heroContainer = createElement('div', 'hero__container');
    heroContainer.classList.add('container');
    heroSection.appendChild(heroContainer);

    const heroTextArea = createElement('div', 'hero__text-area');
    heroContainer.appendChild(heroTextArea);

    const heroHeader2 = createElement('h2', 'hero__header2');
    heroHeader2.textContent = 'Inlimited'
    heroTextArea.appendChild(heroHeader2);

    const heroHeader1 = createElement('h1', 'hero__header1');
    heroHeader1.textContent = 'Sushi Special'
    heroTextArea.appendChild(heroHeader1)

    const heroText = createElement('p', 'hero__text');
    heroText.textContent = "It's all you can eat, not you can eat all!"
    heroTextArea.appendChild(heroText)
};

const createFeatured = () => {

    const featuredSection = createElement('section', 'featured__section');
    body.appendChild(featuredSection);
    
    const featuredContainer = createElement('div', 'container');
    featuredSection.appendChild(featuredContainer);

    const featuredRow = createElement('div', 'featured__row');
    featuredContainer.appendChild(featuredRow);

    const featuredPanel1 = createElement('div', 'featured__panel');
    featuredRow.appendChild(featuredPanel1);




}




const loadHome = () => {
    createHero()
    createFeatured()
}

export default loadHome