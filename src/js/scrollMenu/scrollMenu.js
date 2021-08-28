const btn = document.querySelectorAll('.page__read-more-bttn');
const hiddenText = document.querySelectorAll('.hidden-text');

const readMore = function() {
  let opened = false;

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
      if (!opened) {
        hiddenText.forEach(function(el) {
          el.classList.remove('hidden-text')
        })
        btn[i].textContent = 'Свернуть';
        opened = true;
      } else {
        hiddenText.forEach(function(el) {
          el.classList.add('hidden-text')
        })
        btn[i].textContent = 'Читать далее';
        opened = false;
      }
    })
  }
}

readMore();