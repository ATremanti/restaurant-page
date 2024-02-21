const createMenu = (() => {
    const content = document.querySelector('#content');

    const gridcontainer = document.createElement('div');
    gridcontainer.classList.add('grid-container', 'animated');
    content.appendChild(gridcontainer);

    const menuitem1 = document.createElement('div');
    menuitem1.classList.add('menu-item');
    gridcontainer.appendChild(menuitem1);

    const menuitem2 = document.createElement('div');
    menuitem2.classList.add('menu-item');
    gridcontainer.appendChild(menuitem2);

    const menuitem3 = document.createElement('div');
    menuitem3.classList.add('menu-item');
    gridcontainer.appendChild(menuitem3);

    const menuitem4 = document.createElement('div');
    menuitem4.classList.add('menu-item');
    gridcontainer.appendChild(menuitem4);

    const itemtitle1 = document.createElement('div');
    const itemdesc1 = document.createElement('div');
    itemtitle1.classList.add('item-name');
    itemdesc1.classList.add('item-description');
    itemtitle1.innerText = "Item 1";
    itemdesc1.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    menuitem1.appendChild(itemtitle1);
    menuitem1.appendChild(itemdesc1);

    const itemtitle2 = document.createElement('div');
    const itemdesc2 = document.createElement('div');
    itemtitle2.classList.add('item-name');
    itemdesc2.classList.add('item-description');
    itemtitle2.innerText = "Item 2";
    itemdesc2.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    menuitem2.appendChild(itemtitle2);
    menuitem2.appendChild(itemdesc2);
    

    const itemtitle3 = document.createElement('div');
    const itemdesc3 = document.createElement('div');
    itemtitle3.classList.add('item-name');
    itemdesc3.classList.add('item-description');
    itemtitle3.innerText = "Item 3";
    itemdesc3.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    menuitem3.appendChild(itemtitle3);
    menuitem3.appendChild(itemdesc3);

    const itemtitle4 = document.createElement('div');
    const itemdesc4 = document.createElement('div');
    itemtitle4.classList.add('item-name');
    itemdesc4.classList.add('item-description');
    itemtitle4.innerText = "Item 4";
    itemdesc4.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
    menuitem4.appendChild(itemtitle4);
    menuitem4.appendChild(itemdesc4);
})

export { createMenu }