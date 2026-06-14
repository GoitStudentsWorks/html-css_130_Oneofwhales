// JS for button faq section
const questionBtn = document.querySelectorAll('.question-btn');

questionBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.question-list-item');

    item.classList.toggle('is-open');
  });
});

//JS for back to top btn
const backToTopBtn = document.querySelector('.back-to-top-btn');
const section = document.querySelector('.benefits');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('is-visible');
  } else {
    backToTopBtn.classList.remove('is-visible');
  }

  const sectionRect = section.getBoundingClientRect();

  const buttonTop = window.innerHeight - 30 - backToTopBtn.offsetHeight;
  const buttonBottom = buttonTop + backToTopBtn.offsetHeight;

  const isOverSection =
    buttonBottom > sectionRect.top && buttonTop < sectionRect.bottom;

  backToTopBtn.classList.toggle('is-benefits', isOverSection);
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
