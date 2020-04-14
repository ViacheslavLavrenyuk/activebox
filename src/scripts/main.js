'use strict';

const navigation = document.querySelector('.navigation');
const hamburger = document.querySelector('.header__topbar-hamburger');

function toggleNavigation() {
  hamburger.classList.toggle('hamburger__change');

  if (navigation.className === 'navigation') {
    navigation.className += ' navigation-mobile';
  } else {
    navigation.className = 'navigation';
  }
}

hamburger.onclick = function() {
  toggleNavigation();
};

window.addEventListener('load', function() {
  /* eslint-disable no-undef */
  // eslint-disable-next-line no-new
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
  });
});
