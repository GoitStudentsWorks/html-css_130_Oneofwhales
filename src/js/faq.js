// FAQ accordion
import { toggleClass } from './utils.js';

const questionBtns = document.querySelectorAll('.question-btn');

questionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.question-list-item');

    toggleClass(item, 'is-open');
  });
});
