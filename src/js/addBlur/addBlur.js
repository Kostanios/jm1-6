export function addBlur(blured) {
  const page = document.querySelector('.page__main');
  const footer = document.querySelector('.page__footer');

  if (blured) {
    page.classList.remove('blur');
    footer.classList.remove('blur');
  } else {
    page.classList.add('blur');
    footer.classList.add('blur');
    page.disabled = true;
  }
}