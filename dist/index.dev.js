"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// menu overlay
var elementIconMenu = document.querySelector(".fa-bars");
var elementMenuOverlay = document.querySelector(".menu");
var elementHeader = document.querySelector('#header');
var menuElementA = elementMenuOverlay.getElementsByTagName('a');

function changeMenu() {
  elementIconMenu.addEventListener('click', function () {
    elementIconMenu.classList.toggle('fa-times');
    document.getElementById('typing').classList.toggle('hidden');
    elementMenuOverlay.classList.toggle('active-menu');
  });
}

textAnimation;
var text = 'Hi ! My name is Hieu I\'m a developer...';
var i = 0;

function textAnimation() {
  if (i < text.length) {
    document.getElementById('typing').innerHTML += text.charAt(i++);
    ;
    setTimeout(textAnimation, 200);
  }
}

function scrollSrceen() {
  var menuElementA = elementMenuOverlay.getElementsByTagName('a');
  menuElementA = _toConsumableArray(menuElementA);
  window.addEventListener('scroll', function (e) {
    menuElementA.forEach(function (element) {
      if (window.scrollY > 50) {
        console.log(element);
        element.classList.add('menu-a-scroll');
      } else {
        element.classList.remove('menu-a-scroll');
      }
    });
  });
  var elementHtml = document.querySelector('.html-span');
  var elementCss = document.querySelector('.css-span');
  var elementJs = document.querySelector('.js-span');
  window.addEventListener('scroll', function () {
    if (window.scrollY > elementHtml.clientHeight) {
      elementHtml.style.width = '70%';
      elementCss.style.width = '60%';
      elementJs.style.width = '50%';
    } else {
      elementHtml.style.width = '0';
      elementCss.style.width = '0';
      elementJs.style.width = '0';
    }
  });
  window.addEventListener('scroll', function (e) {
    if (window.scrollY > 50) {
      elementHeader.classList.add('scroll-header');
    } else {
      elementHeader.classList.remove('scroll-header');
    }
  });
  window.addEventListener('scroll', function () {
    var elementInfor = document.querySelectorAll('.infor');
    var elementViewMore = document.querySelectorAll('.view-infor');
    elementInfor = _toConsumableArray(elementInfor);
    elementViewMore = _toConsumableArray(elementViewMore);
    elementInfor.forEach(function (element) {
      if (window.scrollY > 513) {
        element.classList.add('done-scroll');
      } else {
        element.classList.remove('done-scroll');
      }
    });
  });
}

function pickViewPoto() {
  var elementProjectPoto = document.querySelector('.project-poto');
  var elementButtonProjectPoto = document.querySelector('.button-project-poto');
  var listImgRender = [{
    url: './img/dog1.jpg',
    id: 1
  }, {
    url: './img/dog2.jpg',
    id: 1
  }, {
    url: './img/screen-1.jpg',
    id: 2
  }, {
    url: './img/screen-0.jpg',
    id: 2
  }, {
    url: './img/screen-2.jpg',
    id: 2
  }];

  function renderProjectImg(listImg) {
    listImg.forEach(function (url) {
      var spanImg = document.createElement('div');
      spanImg.setAttribute('class', 'img-project');
      spanImg.setAttribute('key', "".concat(url.id));
      spanImg.style.backgroundImage = "url" + "(" + url.url + ")";
      elementProjectPoto.appendChild(spanImg);
    });
  }

  renderProjectImg(listImgRender);
  elementButtonProjectPoto.addEventListener('click', function (e) {
    var key = e.target.attributes.key.value;
    listImgRendeFilter = listImgRender.filter(function (value) {
      return value.id != key;
    });
    elementProjectPoto.innerHTML = '';
    renderProjectImg(listImgRendeFilter);
  });
}

function main() {
  changeMenu();
  textAnimation();
  scrollSrceen();
  pickViewPoto();
}

main();