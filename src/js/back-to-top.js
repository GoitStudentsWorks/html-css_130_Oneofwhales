// Back to top button
import { getElementByClass, toggleClass } from './utils.js';

const backToTopBtn = getElementByClass('.back-to-top-btn');
const section = getElementByClass('.benefits');

window.addEventListener('scroll', () => {
  const isScrolledDown = window.scrollY > 0;
  toggleClass(backToTopBtn, 'is-visible', isScrolledDown);

  const sectionRect = section.getBoundingClientRect();

  const buttonTop = window.innerHeight - 30 - backToTopBtn.offsetHeight;
  const buttonBottom = buttonTop + backToTopBtn.offsetHeight;

  const isOverSection =
    buttonBottom > sectionRect.top && buttonTop < sectionRect.bottom;

  toggleClass(backToTopBtn, 'is-benefits', isOverSection);
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
