const createContact = () => {

    const contactBox = document.createElement('div')
    const mapBox = document.createElement('div')
    contactBox.classList.add('contact-box')
    mapBox.classList.add('map-box')

    const contactPage = document.createElement('div')
    contactPage.classList.add('contact-page')

    const contactCont = document.createElement('div') 
    const hoursCont = document.createElement('div') 
    contactCont.classList.add('contact-container')
    hoursCont.classList.add('hours-container')

    const contact = document.createElement('div');
    contact.classList.add('contact')
        
        const contactTitle = document.createElement('div')
        const phone = document.createElement('div')
        const email = document.createElement('div')
        contactTitle.classList.add('contact-title')
        phone.classList.add('phone')
        email.classList.add('email')
        contactTitle.textContent = 'Contact Us:'
        phone.textContent = 'Phone: (+995) 123-45-67-89'
        email.textContent = 'Email: Reserve@Tiflisi.ge'
        
        contact.appendChild(contactTitle)
        contact.appendChild(phone)
        contact.appendChild(email)

    const hours = document.createElement('div')
    hours.classList.add('hours')

        const hoursTitle = document.createElement('div')
        const weekday = document.createElement('div')
        const weekend = document.createElement('div')
        hoursTitle.classList.add('hours-title')
        weekday.classList.add('weekday')
        weekend.classList.add('weekend')
        hoursTitle.textContent = 'Working Hours:'
        weekday.textContent = 'Mon-Fri: 9am - 10pm'
        weekend.textContent = 'Sat-Sun: 11am -12pm'

        hours.appendChild(hoursTitle)
        hours.appendChild(weekday)
        hours.appendChild(weekend)

    const googleMap = document.createElement('iframe')    
    googleMap.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1489.696896632823!2d44.8045872!3d41.6904339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d617b79f271%3A0x115e2bf966cab6f1!2sMuseum%20of%20Illusions!5e0!3m2!1sen!2sge!4v1652826100618!5m2!1sen!2sge'
    googleMap.width = '600';
    googleMap.height = '450';
    googleMap.style = 'border: 0;';
    googleMap.allowFullscreen = '';
    googleMap.loading = 'lazy'
    googleMap.referrerPolicy = 'no-referrer-when-downgrade'

    
    
    contactCont.appendChild(contact);
    hoursCont.appendChild(hours);
    mapBox.appendChild(googleMap);
    contactBox.appendChild(contactCont)
    contactBox.appendChild(hoursCont)
    contactPage.appendChild(contactBox);
    contactPage.appendChild(mapBox);

    return contactPage;
}

function renderContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default renderContact;