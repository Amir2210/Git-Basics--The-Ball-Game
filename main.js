"use strict"

var ballSize = 100
function onBallClick(el, maxDiameter) {
  ballSize = ballSize + getRandomInt(20, 60)
  if (ballSize > maxDiameter) {
    ballSize = 100
  }
  el.style.width = ballSize + "px"
  el.style.height = ballSize + "px"
  el.style.backgroundColor = getRandomColor()
  el.innerText = ballSize
}

function swapColorsAndSizes(el) {
  const elBall1 = document.querySelector(".ball1")
  const elBall2 = document.querySelector(".ball2")

  var tempColor = elBall1.style.backgroundColor
  elBall1.style.backgroundColor = elBall2.style.backgroundColor
  elBall2.style.backgroundColor = tempColor

  // Swap sizes
  var tempWidth = elBall1.style.width
  elBall1.style.width = elBall2.style.width
  elBall2.style.width = tempWidth

  var tempHeight = elBall1.style.height
  elBall1.style.height = elBall2.style.height
  elBall2.style.height = tempHeight
}
