"use strict"

var ballSize = 100
function onBallClick(el, maxDiameter) {
  ballSize = ballSize + getRandomInt(20, 60)
  if (ballSize > 400) {
    ballSize = 100
  }
  el.style.width = ballSize + "px"
  el.style.height = ballSize + "px"
  el.style.backgroundColor = getRandomColor()
  el.innerText = ballSize
}
