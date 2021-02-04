'use strict';

(function () {
  var PHONE_CHECK_MSG = 'Введите номер телефона в формате +xxxxxxxxxxx';

  var mainHeader = document.querySelector('.main-header__navigation');
  var siteNavigation = document.querySelector('.site-navigation');
  var menuToggle = document.querySelector('.main-header__toggle');
  var menuItems = siteNavigation && siteNavigation.querySelectorAll('.site-navigation__item a');
  var form = document.querySelector('.promo_form form');
  var phoneInput = form && form.querySelector('[name=phone]');

  var closeMenu = function () {
    document.body.classList.remove('page__body--fullscreen');
    siteNavigation.classList.add('site-navigation--close');
    menuToggle.classList.add('main-header__toggle--open');
  };

  var openMenu = function () {
    document.body.classList.add('page__body--fullscreen');
    siteNavigation.classList.remove('site-navigation--close');
    menuToggle.classList.remove('main-header__toggle--open');
  };

  var checkPhoneValidity = function () {
    var result = true;
    var regex = /^\+[0-9]{11}$/;

    if (!regex.test(phoneInput.value)) {
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
      phoneInput.setCustomValidity('');
      phoneInput.reportValidity();
    });
  }

  if (form) {
    form.addEventListener('submit', function (evt) {
      if (!checkPhoneValidity()) {
        evt.preventDefault();
      }
    });
  }
})();
