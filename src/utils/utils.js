const createElement = (element, className) => {
    const el = document.createElement(element);
    el.classList.add(className)
    return el;
}

const menuPanel = (image, name, price, description) => {
    const panel = document.createElement('div');
    panel.classList.add('menu__panel');

    const panelImage = document.createElement('img');
    panelImage.src = image;
    panel.appendChild(panelImage);
    
    const panelHeader = document.createElement('h3');
    panelHeader.textContent = name;
    panel.appendChild(panelHeader);

    const panelPrice = document.createElement('h3');
    panelPrice.textContent = price;
    panel.appendChild(panelPrice);

    const panelDescription = document.createElement('p');
    panelDescription.textContent = description;
    panel.appendChild(panelDescription);

    return panel
}


export {
    createElement,
    menuPanel
}