const createMenu = () => {
    const menuPage = document.createElement('div');
    const menuHead = document.createElement('div')
    const menuHeadP = document.createElement('p')
    menuHeadP.textContent = 'Menu' 
    menuHead.classList.add('menu-head')
    menuPage.classList.add('menu-page')

    menuHead.appendChild(menuHeadP);

    const menuCont = document.createElement('div');
    menuCont.classList.add('menu-container');   

    menuCont.appendChild(
        createMenuItem(
            'Adjarian Khachapuri',
            '20₾',
            'Whole-wheat flour, water, traditional georgian cheese, a whole egg yolk'
        )
    );
    menuCont.appendChild(
        createMenuItem(
            'Imeretian style beans',
            '12₾',
            'Local organic beans with onion, garlic crisps and unique Kakhetian oil'
        )
    );
    menuCont.appendChild(
        createMenuItem(
            'Town style salad',
            '14₾',
            'Cucumber, tomatoes, roasted walnuts, onions, Jonjoli and a variety of spices and herbs'
        )
    );
    menuCont.appendChild(
        createMenuItem(
            'Gebzhalia',
            '19₾',
            'Kneaded Georgian cheese in minted local yogurt with a spicy Adjika paste'
        )
    );
    menuCont.appendChild(
        createMenuItem(
            'Spicy soup "Ostri"',
            '35₾',
            'Beef stew made with local-grown tomatoes and our special herb and spice mix'
        )
    );
    menuCont.appendChild(
        createMenuItem(
            'Shkmeruli',
            '29₾',
            'Roasted chicken breast with whole cream, garlic, ginger, special spices and Dambalkhacho (a local version of a cottage cheese)'
        )
    );

    menuPage.appendChild(menuHead);
    menuPage.appendChild(menuCont);

    return menuPage;
}

const createMenuItem = (name, price, description) => {

    const itemCont = document.createElement('div');
        const itemImage = document.createElement("img");
        const itemText = document.createElement('div');    
            const itemHead = document.createElement('div');
                const itemName = document.createElement('div');
                const itemPrice = document.createElement('div');
            const itemDescription = document.createElement('div');

    itemImage.src = `images/Foods/${name}.jpg`;
    itemImage.alt = `${name}`;
    itemImage.id = `${name.replace(/\s/g, '').toLowerCase()}`;

    const itemNameP = document.createElement('p')
    const itemPriceP = document.createElement('p')
    const itemDescriptionP = document.createElement('p')

    itemNameP.textContent = name;
    itemPriceP.textContent = price;
    itemDescriptionP.textContent = description;

    itemCont.classList.add('item-container');  
    itemText.classList.add('item-text')  
    itemHead.classList.add('item-head');
    itemName.classList.add('item-name');
    itemPrice.classList.add('item-price');
    itemDescription.classList.add('item-description'); 

    itemName.appendChild(itemNameP)
    itemPrice.appendChild(itemPriceP)
    itemDescription.appendChild(itemDescriptionP)
    itemHead.appendChild(itemName);
    itemHead.appendChild(itemPrice);
    itemText.appendChild(itemHead);
    itemText.appendChild(itemDescription);
    itemCont.appendChild(itemText);
    itemCont.appendChild(itemImage);

    return itemCont;
}


function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;