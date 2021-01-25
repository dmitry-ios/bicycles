'use strict';

var mainHeader = document.querySelector('.main-header__navigation');
var siteNavigation = document.querySelector('.site-navigation');
var menuToggle = document.querySelector('.main-header__toggle');

mainHeader.classList.remove('main-header__navigation--nojs');

menuToggle.addEventListener('click', function () {
  if (siteNavigation.classList.contains('site-navigation--close')) {
    siteNavigation.classList.remove('site-navigation--close');
    menuToggle.classList.remove('main-header__toggle--open');
  } else {
    siteNavigation.classList.add('site-navigation--close');
    menuToggle.classList.add('main-header__toggle--open');
  }
});
