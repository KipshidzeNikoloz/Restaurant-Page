import loadHome from "./home";
import loadContact from "./contact";

const createMain = () => {
    const main = document.createElement('main');  
    main.id = 'main'  
    // main.appendChild(createHeader())

    return main;
}

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('page-header')
    const h1 = document.createElement('h1')
    h1.textContent = 'TIFLIS'
    
    
    header.appendChild(h1);
    header.appendChild(createNav())
    return header;
}

const createNav = () => {
    const navbar = document.createElement('div')
    navbar.classList.add('navbar');

    const homeBtn = document.createElement('div');
    homeBtn.classList.add('nav-button');
    homeBtn.id = 'home';
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('nav-button');
    menuBtn.id = 'menu';
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        console.log(e)
    })
    const contactBtn = document.createElement('div');
    contactBtn.classList.add('nav-button');
    contactBtn.id = 'contact';
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(contactBtn);
        loadContact();
    })

    navbar.appendChild(homeBtn)
    navbar.appendChild(menuBtn)
    navbar.appendChild(contactBtn)

    return navbar;

}

const setActive = (btn) => {
    const buttons = document.querySelectorAll('.nav-button')

    buttons.forEach((btn) =>{
        if (btn !== this) {
            btn.classList.remove('active');
        }
    });

    btn.classList.add('active');
}


function initSite(){
    const content = document.getElementById('content');
    content.appendChild(createHeader())
    content.appendChild(createMain())

    setActive(document.querySelector('.nav-button'));
    loadHome();
}

export default initSite;