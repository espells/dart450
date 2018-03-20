/**********************************************

SIDLEE

**********************************************/

$(document).ready(function () {
  // Randomly places all magnents when page loads as if scattered on a fridge
  var magnets = [
    'I', 'have', 'some', 'cool', 'skills', 'that', 'you', 'should', 'know', 'amazing', 'great style', 'great', 'taste', 'in', 'films', 'organized', 'puntual','funny', 'witty', 'charming',
  'code', 'makes', 'creates', 'vision', 'extraordinary', 'hi', 'sidlee', 'my', 'name', 'is','emma'
, 'becuase', 'hello', 'have', 'am', 'how', 'to' ]
//makes magnets each draggable
  magnets.forEach(addMagnet)
  $('.magnet').draggable()
})

window.alert("Hi Sidlee, want to know more about me?")//alerts on page load - tells user what to do.


function addMagnet(text) {
  var randomX = Math.random() * $(window).width()
  var randomY = Math.random() * $(window).height()

  var $magnet = $('<div class="magnet"></div>')
    .text(text)
    .css({
      position: 'absolute',
      top: randomY,
      left: randomX
    })

  $('.magnetposition').append($magnet)
}
// function for random scattering of words
