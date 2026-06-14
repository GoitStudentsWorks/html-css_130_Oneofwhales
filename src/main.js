//Utils
function getElementByClass(elClass) {
  return document.querySelector(elClass);
}

function toggleClass(el, elClass, condition) {
  return condition === undefined
    ? el.classList.toggle(elClass)
    : el.classList.toggle(elClass, condition);
}

function toggleMenu(mobileMenu, headerContainer, condition) {
  toggleClass(mobileMenu, 'is-open', condition);
  toggleClass(headerContainer, 'is-open-mobile', condition);
}

// JS for button faq section
const questionBtn = document.querySelectorAll('.question-btn');

questionBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.question-list-item');

    toggleClass(item, 'is-open');
  });
});

//JS for back to top btn
const backToTopBtn = document.querySelector('.back-to-top-btn');
const section = getElementByClass('.benefits');

window.addEventListener('scroll', () => {
  const isScroll = window.scrollY > 300;
  toggleClass(backToTopBtn, 'is-visible', isScroll);

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

//header menu
const burgerMenuBtn = getElementByClass('.burger-btn');
const closeMenuBtn = getElementByClass('.close-btn');
const mobileMenu = getElementByClass('.mobile-tablet-menu-container');
const headerContainer = getElementByClass('.header-container');

burgerMenuBtn.addEventListener('click', () => {
  toggleMenu(mobileMenu, headerContainer, true);
});

closeMenuBtn.addEventListener('click', () => {
  toggleMenu(mobileMenu, headerContainer, false);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggleMenu(mobileMenu, headerContainer, false);
  }
});

mobileMenu.addEventListener('click', event => {
  if (event.target === mobileMenu) {
    toggleMenu(mobileMenu, headerContainer, false);
  }
});
