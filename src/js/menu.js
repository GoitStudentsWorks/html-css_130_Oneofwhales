// Mobile / tablet burger menu
import { getElementByClass, toggleClass } from './utils.js';

const burgerMenuBtn = getElementByClass('.burger-btn');
const closeMenuBtn = getElementByClass('.close-btn');
const mobileMenu = getElementByClass('.mobile-tablet-menu-container');
const headerContainer = getElementByClass('.header-container');
const header = getElementByClass('.header');

function toggleMenu(condition) {
  toggleClass(mobileMenu, 'is-open', condition);
  toggleClass(headerContainer, 'is-open-mobile', condition);
  toggleClass(header, 'is-open-mobile', condition);
}

burgerMenuBtn.addEventListener('click', () => toggleMenu(true));

closeMenuBtn.addEventListener('click', () => toggleMenu(false));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggleMenu(false);
  }
});

mobileMenu.addEventListener('click', event => {
  if (event.target === mobileMenu) {
    toggleMenu(false);
  }
});
