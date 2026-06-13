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

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('is-visible');
  } else {
    backToTopBtn.classList.remove('is-visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
