// Hide header on scroll down, show on scroll up
import { getElementByClass, toggleClass } from './utils.js';

const header = getElementByClass('.header');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const isMenuOpen = header.classList.contains('is-open-mobile');
  const scrollingDown = currentScrollY > lastScrollY;

  const shouldHide =
    !isMenuOpen && scrollingDown && currentScrollY > header.offsetHeight;

  toggleClass(header, 'is-hidden', shouldHide);

  lastScrollY = currentScrollY;
});
