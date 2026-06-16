// Shared DOM helpers
export function getElementByClass(elClass) {
  return document.querySelector(elClass);
}

export function toggleClass(el, elClass, condition) {
  return condition === undefined
    ? el.classList.toggle(elClass)
    : el.classList.toggle(elClass, condition);
}
