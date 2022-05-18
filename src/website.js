import renderHome from "./home";
import renderContact from "./contact";
import renderMenu from "./menu";

const createMain = () => {
    const main = document.createElement('main');  
    main.id = 'main'  
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
        renderHome();
    });

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('nav-button');
    menuBtn.id = 'menu';
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(menuBtn);
        renderMenu();
    })

    const contactBtn = document.createElement('div');
    contactBtn.classList.add('nav-button');
    contactBtn.id = 'contact';
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(contactBtn);
        renderContact();
    })

    navbar.appendChild(homeBtn)
    navbar.appendChild(menuBtn)
    navbar.appendChild(contactBtn)

    return navbar;

}

const createFooter = () => {
    const footer = document.createElement('div')
        const textCont = document.createElement('div')
            const name = document.createElement('p')
            name.textContent = 'Nikoloz Kipshidze'
            const gitHubLink = document.createElement('a')
            gitHubLink.href = "https://github.com/KipshidzeNikoloz";
            const gitIcon = document.createElement('i')
      
    footer.classList.add('footer')            
    textCont.classList.add('textCont')     
    gitIcon.classList.add('fa')
    gitIcon.classList.add('fa-github')
    gitIcon.style= 'font-size:24px';

    gitHubLink.appendChild(gitIcon)
    textCont.appendChild(name)
    textCont.appendChild(gitHubLink)
    footer.appendChild(textCont)
    
    return footer;
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
    const content = document.querySelector('#content');

    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    setActive(document.querySelector('.nav-button'));
    renderHome(); 
}

export  {   initSite, setActive };