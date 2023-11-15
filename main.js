"use strict"

var ballSize = 100
function onBallClick(el) {
  ballSize = ballSize + 50
  if (ballSize > 400) {
    ballSize = 100
  }
  el.style.width = ballSize + 50 + "px"
  el.style.height = ballSize + 50 + "px"
  el.innerText = ballSize
}
