import { createElement, menuPanel } from '../utils/utils.js'
import aboutImage from '../assets/about_img.jpg'
import locationImage from '../assets/location_img.jpg'
import menuData from '../menu-data.json';
import '../assets/sushi_plate_1@2x.jpg';
import '../assets/sushi_plate_2@2x.jpg';
import '../assets/sushi_plate_3@2x.jpg';

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


    //DISHES
    const dishes = menuData.menu;
    console.log(dishes)

    for (const dish in dishes) {
        if (dishes[dish].featured){
            console.log(dishes[dish].name)
            const featuredItemImage = dishes[dish].image;
            const featuredItemName = dishes[dish].name;
            const featuredItemPrice = dishes[dish].price;
            const featuredItemDescription = dishes[dish].description;
            const featuredItem = menuPanel(featuredItemImage, featuredItemName, featuredItemPrice, featuredItemDescription);
    
            featuredRow.appendChild(featuredItem);
        }
    }

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

const createLocation = () => {

    const locationSection = createElement('section', 'location__section');
    body.appendChild(locationSection);

    const locationContainer = createElement('div', 'container');
    locationSection.appendChild(locationContainer);

    const locationPanel = createElement('div', 'location__panel');
    locationContainer.appendChild(locationPanel);

    const locationPanelImg = createElement('img', 'location__img');
    locationPanelImg.src = locationImage;
    locationPanel.appendChild(locationPanelImg);
 
    const locationPanelHeader = createElement('h3', 'location__header');
    locationPanelHeader.textContent = 'Sushi Express';
    locationPanel.appendChild(locationPanelHeader);

    const locationPanelUl = document.createElement('ul')
    locationPanel.appendChild(locationPanelUl);

    const locationHoursLi = document.createElement('li')
    locationHoursLi.textContent = 'Hours: Mon - Fri / 9am - 5pm'
    locationPanelUl.appendChild(locationHoursLi)

    const locationAddressLi = document.createElement('li');
    locationAddressLi.textContent = '1345 Sushi Road, 33445, Phx AZ';
    locationPanelUl.appendChild(locationAddressLi);

    const locationPhone = document.createElement('li');
    locationPhone.textContent = '(534) 335-4555'
    locationPanel.appendChild(locationPhone);

    const locationEmail = document.createElement('li');
    locationEmail.textContent = 'orders@sushiexpress.com';
    locationPanelUl.appendChild(locationEmail);
}

const loadHome = () => {
    createHero()
    createFeatured()
    createAbout()
    createLocation()
   
}

export default loadHome