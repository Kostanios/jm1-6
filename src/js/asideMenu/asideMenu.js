let link = function () {
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
  let openBtn = document.querySelector('.btn--type-burger');
  let closeBtn = document.querySelector('.btn--type-close');

  openBtn.addEventListener('click', function() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById('main').style.filter = 'opacity(0.1)'
  })

  closeBtn.addEventListener('click', function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('main').style.filter = 'opacity(1)'
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


closeAndOpenBurger();
link();