import renderMenu from "./menu"
import { setActive } from "./website"

const createHome = () => {
    const mainCont = document.createElement('div')
    mainCont.classList.add('main-container')
    mainCont.id = 'mainCont'

    const tagCont = document.createElement('div');
    tagCont.classList.add('tagline-container');

        const tagline = document.createElement('div');
        tagline.classList.add('tagline');
        const p1 = document.createElement('p');
        p1.textContent = 'Traditional food in a historic city';
        const p2 = document.createElement('p');
        p2.textContent = 'At your service from 1968';
        const separator = document.createElement('div');
        separator.classList.add('seperator');
        p2.id = "subtitle";
        tagline.appendChild(p1);
        tagline.appendChild(separator);
        tagline.appendChild(p2);

    const btnCont = document.createElement('div');
    btnCont.classList.add('button-container');

        const order1 = document.createElement('div');
        const order2 = document.createElement('div');
        order1.classList.add('order');
        order2.classList.add('order');
        const orderBtn1 = document.createElement('button');
        const orderBtn2 = document.createElement('button');
        orderBtn1.classList.add('order-button');
        orderBtn1.id = 'home-menu-button'
        orderBtn2.classList.add('order-button');
        orderBtn1.textContent = 'Menu';
        orderBtn2.textContent = 'Order Now';

        order1.appendChild(orderBtn1);
        order2.appendChild(orderBtn2);
        btnCont.appendChild(order1);
        btnCont.appendChild(order2);
        const menuBtn = document.getElementById('menu')

        orderBtn1.addEventListener('click', (e) => {
            setActive(menuBtn);
            renderMenu();
        })
    tagCont.appendChild(tagline);
    tagCont.appendChild(btnCont);
    mainCont.appendChild(tagCont);   
    
    return mainCont;
}

function renderHome() {
    const main = document.querySelector('#main')
    main.textContent = '';
    main.appendChild(createHome());
}

export default renderHome;