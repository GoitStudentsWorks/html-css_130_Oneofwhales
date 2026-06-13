// JS for button faq section
const questionBtn = document.querySelectorAll('.question-btn');

questionBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.question-list-item');

    item.classList.toggle('is-open');
  });
});
