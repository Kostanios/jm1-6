const link = function () {
  let linkNav = document.querySelectorAll('.aside-menus__item'),
    linkName;
  linkNav.forEach(item => {
    item.addEventListener('click', selectLinkNav)
  })

  function selectLinkNav() {
    linkNav.forEach(item => {
      item.classList.remove('is-active')
    });
    this.classList.add('is-active');
    linkName = this.getAttribute('data-link-name');
  }
}

function closeAndOpenBurger() {
  const openBtn = document.querySelector('.btn--type-burger');
  const closeBtn = document.querySelector('.btn--type-close');
  const asideMenu = document.querySelector('.aside-menus');
  const page = document.querySelector('.page__main');

  openBtn.addEventListener('click', function() {
    asideMenu.classList.add('open');
    page.classList.add('opacity');
  })

  closeBtn.addEventListener('click', function() {
    asideMenu.classList.remove('open')
    page.classList.remove('opacity');
  })  
}

let inp = document.getElementsByName('lang');


inp.forEach((i) => {
  if (i.checked) {
    localStorage.setItem('lang', i.id);
  }
  i.addEventListener('change', () => {
    localStorage.clear();
    localStorage.setItem('lang', i.id);
    console.log(i.id)
  });
});

const selectLanguage = () => {
  // Проверка на нового пользователя
  if (localStorage.getItem('lang') == undefined) {
    inp[0].checked = true;
  }

  // Сохранение языка при следующих заходах
  if (localStorage.getItem('lang') == 'ru') {
    inp[0].checked = true;
  } else if (localStorage.getItem('lang') == 'en') {
    inp[1].checked = true;
  } else if (localStorage.getItem('lang') == 'ch'){
    inp[2].checked = true;
  }
}

closeAndOpenBurger();
link();
selectLanguage();