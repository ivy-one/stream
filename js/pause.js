"use strict";

var textInfoSetup = function textInfoSetup(_) {
  var textInfoSelector = document.querySelector('.text-info');
  var textInfo = localStorage.getItem('textInfo');

  if (textInfo !== null) {
    textInfoSelector.textContent = textInfo;
  }

  textInfoSelector.addEventListener("input", function () {
    localStorage.setItem('textInfo', textInfoSelector.textContent);
  }, false);
};

var embedVideo = function embedVideo(_) {
  var startAt = Math.floor(Math.random() * 30 * 60);
  var url = "https://www.youtube.com/embed/wOMwO5T3yT4?version=3&autoplay=1&playlist=wOMwO5T3yT4&loop=1&mute=true&start=" + startAt;
  document.querySelector('iframe.youtube').setAttribute('src', url);
};

var randomBackgroundPosition = function randomBackgroundPosition(_) {
  var backgroundElement = document.querySelector('.background-image');
  var backgroundStyle = window.getComputedStyle(backgroundElement).backgroundImage;
  var width = parseInt(backgroundStyle.match(/\d+/)[0]);
  backgroundElement.style.backgroundPositionX = Math.floor(Math.random() * width) + 'px';
};

window.onload = function () {
  textInfoSetup();
  embedVideo();
  randomBackgroundPosition();
};