var textInfoSetup = _ => {
  let textInfoSelector = document.querySelector('.text-info')
  let textInfo = localStorage.getItem('textInfo')

  if (textInfo !== null) {
    textInfoSelector.textContent = textInfo
  }

  textInfoSelector.addEventListener("input", function() {
    localStorage.setItem('textInfo', textInfoSelector.textContent)
  }, false);
}

var embedVideo = _ => {
  let startAt = Math.floor(Math.random() * Math.floor(30 * 60))
  let url = "https://www.youtube.com/embed/wOMwO5T3yT4?version=3&autoplay=1&playlist=wOMwO5T3yT4&loop=1&start=" + startAt
  document.querySelector('iframe.youtube').setAttribute('src', url)
}

window.onload = function() {
  textInfoSetup()
  embedVideo()
}
