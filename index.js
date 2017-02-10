console.log(`index.js loaded...`)
function moveDodgerRight(x) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    if (left < 360) {
      dodger.style.left = `${left + x}px`
    }
}
function moveDodgerLeft(x) {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - x}px`
  }
}

var init = function() {
//  document.addEventListener('keydown', function(e) { console.log(e.which) } )

  var dodger = document.getElementById('dodger')

  document.addEventListener('keydown', function(e) {
    var distance = 1

    if (e.which === 37) {
   		moveDodgerLeft(distance)
    }

    if (e.which === 39) {
      moveDodgerRight(distance)
    }
  });
}

window.addEventListener('load', init())
