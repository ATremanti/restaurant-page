import { createHome } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";

const content = document.querySelector('#content');
const homebtn = document.querySelector('#home-btn');
const menubtn = document.querySelector('#menu-btn');
const aboutbtn = document.querySelector('#about-btn');

createHome();

homebtn.addEventListener('click', () => {
    content.innerHTML = '';
    createHome();
})

menubtn.addEventListener('click', () => {
    content.innerHTML = '';
    createMenu();
})

aboutbtn.addEventListener('click', () => {
    content.innerHTML = '';
    createAbout();
})