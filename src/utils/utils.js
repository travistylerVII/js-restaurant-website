const createElement = (element, className) => {
    const el = document.createElement(element);
    el.classList.add(className)
    return el;
}


export {
    createElement
}