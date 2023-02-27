import { createElement, menuPanel } from '../utils/utils.js'
import menuItem1 from '../assets/sushi_plate_1@2x.jpg'
import menuItem2 from '../assets/sushi_plate_2@2x.jpg'
import menuItem3 from '../assets/sushi_plate_3@2x.jpg'
import aboutImage from '../assets/about_img.jpg'


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

    //Featured Item 1
    const featuredItem1Image = menuItem1;
    const featuredItem1Name = 'Sushi Plate 1';
    const featuredItem1Price = '$14.99';
    const featuredItem1Description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!';
    const featuredItem1 = menuPanel(featuredItem1Image, featuredItem1Name, featuredItem1Price, featuredItem1Description);

    featuredRow.appendChild(featuredItem1);

    //Featured Item2
    const featuredItem2Image = menuItem2;
    const featuredItem2Name = 'Sushi Plate 2';
    const featuredItem2Price = '$12.99';
    const featuredItem2Description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!';
    const featuredItem2 = menuPanel(featuredItem2Image, featuredItem2Name, featuredItem2Price, featuredItem2Description);

    featuredRow.appendChild(featuredItem2);


    //Featured Item3
    const featuredItem3Image = menuItem3;
    const featuredItem3Name = 'Sushi Plate 2';
    const featuredItem3Price = '$16.99';
    const featuredItem3Description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!';
    const featuredItem3 = menuPanel(featuredItem3Image, featuredItem3Name, featuredItem3Price, featuredItem3Description);

    featuredRow.appendChild(featuredItem3);

    

    //Featured BTN Area
    const featuredBtnArea = createElement('div', 'featured__btn-area');
    featuredContainer.appendChild(featuredBtnArea);

    const featuredBtn = createElement('button', 'featured__btn');
    featuredBtn.classList.add('btn', 'btn--primary', 'btn--rounded-full');
    featuredBtn.textContent = 'View Full Menu';
    featuredBtnArea.appendChild(featuredBtn);
 
};

const createAbout = () => {

    const aboutSection = createElement('section', 'about__section');
    body.appendChild(aboutSection);

    const aboutContainer = createElement('div', 'container');
    aboutSection.appendChild(aboutContainer);

    const aboutRow = createElement('div', 'about__row');
    aboutContainer.appendChild(aboutRow);

    const aboutTextArea = createElement('div', 'about__text-area');
    aboutRow.appendChild(aboutTextArea)

    const aboutTextAreaHeader = createElement('h2', 'about__header')
    aboutTextAreaHeader.textContent = 'About Us';
    aboutTextArea.appendChild(aboutTextAreaHeader)

    const aboutTextAreaText = createElement('p', 'about__text')
    aboutTextAreaText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!';
    aboutTextArea.appendChild(aboutTextAreaText);

    const aboutImageArea = createElement('div', 'about__img-area');
    aboutRow.appendChild(aboutImageArea);

    const aboutImg = createElement('img', 'about__img');
    aboutImg.src = aboutImage;
    aboutImageArea.appendChild(aboutImg);
};



const loadHome = () => {
    createHero()
    createFeatured()
    createAbout()
}

export default loadHome