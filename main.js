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

function reducesSizes() {
  const elBall1 = document.querySelector(".ball1")
  const elBall2 = document.querySelector(".ball2")
  if (ballSize < 100) return
  var randomSizeBall1 = getRandomInt(20, 60)
  if (ballSize - randomSizeBall1 < 100) {
    elBall1.style.width = 100 + "px"
    elBall1.style.height = 100 + "px"
    elBall1.innerText = elBall1.style.width
  } else {
    elBall1.style.width = ballSize - randomSizeBall1 + "px"
    elBall1.style.height = ballSize - randomSizeBall1 + "px"
    elBall1.innerText = elBall1.style.width
  }

  var randomSizeBall2 = getRandomInt(20, 60)
  if (ballSize - randomSizeBall2 < 100) {
    elBall2.style.width = 100 + "px"
    elBall2.style.height = 100 + "px"
    elBall2.innerText = elBall2.style.width
  } else {
    elBall2.style.width = ballSize - randomSizeBall2 + "px"
    elBall2.style.height = ballSize - randomSizeBall2 + "px"
    elBall2.innerText = elBall2.style.width
  }
}
