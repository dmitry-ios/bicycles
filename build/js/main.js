'use strict';

(function () {
  var PHONE_CHECK_MSG = 'Введите номер телефона в формате (123) 456 7890';

  var mainHeader = document.querySelector('.main-header__navigation');
  var siteNavigation = document.querySelector('.site-navigation');
  var menuToggle = document.querySelector('.main-header__toggle');
  var menuItems = siteNavigation && siteNavigation.querySelectorAll('.site-navigation__item a');
  var form = document.querySelector('.promo_form form');
  var phoneInput = form && form.querySelector('[name=phone]');

  var closeMenu = function () {
    siteNavigation.classList.add('site-navigation--close');
    menuToggle.classList.add('main-header__toggle--open');
  };

  var openMenu = function () {
    siteNavigation.classList.remove('site-navigation--close');
    menuToggle.classList.remove('main-header__toggle--open');
  };

  var checkPhoneValidity = function () {
    var result = true;

    if (!phoneInput.value.match(/^(?:\([0-9]{3}\)|[0-9]{3})[-\s\.\/]?[0-9]{3}[-\s\.\/]?[0-9]{4}/gm)) {
      result = false;
      phoneInput.setCustomValidity(PHONE_CHECK_MSG);
    } else {
      phoneInput.setCustomValidity('');

    }
    phoneInput.reportValidity();

    return result;
  };

  if (mainHeader && menuToggle) {
    mainHeader.classList.remove('main-header__navigation--nojs');

    menuToggle.addEventListener('click', function () {
      if (siteNavigation.classList.contains('site-navigation--close')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  if (menuItems) {
    for (var i = 0; i < menuItems.length; ++i) {
      menuItems[i].addEventListener('click', function () {
        closeMenu();
      });
    }
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      checkPhoneValidity();
    });
  }
})();
