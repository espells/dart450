/**********************************************

DART 450, Winter 2018
Midterm- don't push my buttons
Emma Spellacy

**********************************************/

$(document).ready(function () {
  // Randomly places all magnents when page loads as if scatterde on a fridge
  var magnets = [
    'hello', 'I', 'love','you', 'me', 'they', 'adore',
    'admire', 'wish', 'heaven', 'with', 'lover', 'friend',
    'care', 'desire', 'give', 'giving', 'loving', 'gracious',
    'ideally','forever','powerful','strong', 'incredible', 'I',
    'me', 'going', 'forward', 'enticing', 'very', 'kind', 'splendid',
    'extremely', 'destined', 'fate', 'smart', 'intelligent', 'crazy',
    'earth', 'care', 'take', 'posess', 'awareness', 'demand', 'your',
    'their', 'driven', 'are', 'am', 'always', 'insatiable', 'long',
    'growing', 'undeniably', 'the', 'will', 'have', 'and', 'ok'
  ]
//makes magnets each draggable
  magnets.forEach(addMagnet)
  $('.magnet').draggable()
})

window.alert("Glad you're feeling so loving today! Why don't you spread the love and leave something nice on the fridge?")//alerts on page load - tells user what to do.


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
