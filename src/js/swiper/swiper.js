const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  slidesPerView: 1.15,

  spaceBetween: 15,

  breakpoints: {
    330: {
      slidesPerView: 1.20,
    },

    340: {
      slidesPerView: 1.25,
    },

    350: {
      slidesPerView: 1.25,
    },

    360: {
      slidesPerView: 1.35,
    },

    370: {
      slidesPerView: 1.30,
    },

    380: {
      slidesPerView: 1.35,
    },

    390: {
      slidesPerView: 1.35,
    },

    400: {
      slidesPerView: 1.40,
    },

    410: {
      slidesPerView: 1.45,
    },

    420: {
      slidesPerView: 1.50,
    },

    500: {
      slidesPerView: 1.8,
    },

    510: {
      slidesPerView: 1.9,
    },

    530: {
      slidesPerView: 2,
    },
  }
});

function showMoreBrands() {
  const button = document.querySelectorAll('.btn--type-showmore');
  const _ = document.querySelectorAll('.hidden');
  const cards = [];
  let opened = false;
  for (let i = 1; i <= _.length; i++) {
    cards.push(document.getElementById([i]))
  }

  button[0].addEventListener('click', function() {
    if (!opened) {
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('hidden', 'hidden-768')
      }

      button[0].innerHTML = 'Скрыть'
      opened = true;
    } else {
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('hidden');
        document.getElementById('1').classList.add('hidden-768')
        document.getElementById('2').classList.add('hidden-768')
      }

      button[0].innerHTML = 'Показать все'
      opened = false;
    }


  })
}

showMoreBrands();
