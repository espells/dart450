/**********************************************

DART 450, Winter 2018
Exercise 05
Emma Spellacy

Make background flash different colors WITH DIFFERENT TEXT flashing
**********************************************/

$(document).ready(function () {


// Declare our array of colours
var colours = ['#ff0000	','#ff6600','#ffff00','#ff0080','#ff6600',	'#ffff00','#ffff00','#ff0000', '#ffff00' ];
// Start at element 0
var currentColour = 0;
// Set the background to that colour
$('body').css({ backgroundColor: colours[currentColour] });

  // When clicked, increase our element index by one
  setInterval(function(){
    currentColour = currentColour + 1;

    // Make sure it doesn't go beyond the end of the array!
    if (currentColour >= colours.length) {
      currentColour = 0;
    }
    // Set the background colour
    $('body').css({ backgroundColor: colours[currentColour] });
  },150);

/*var text = ['HELLO', 'BONJOUR', 'CIAO', 'ALLO'];
var currentText = 0; //"0" is the place in line according to the array.

  setInterval(function(){
    currentText = currentText + 1;

    if (currentText >= text.length) {
      currentText = 0;
    }
  },1000);
*/
/*var delay = 1000;  
setTimeout(function () { 
$('.message').text("HELLO");
 },delay);

var delay = 2000;  
setTimeout(function () { 
$('.message').text("BONJOUR");
 },delay);*/

var greeting = ["BONJOUR", "HI", "AU REVOIR","GOODBYE", 'POURQUOI', 'WHY', 'ARRET', 'STOP', 'JE DETESTE', 'I HATE', 'CES COLOURS', 'THESE COLORS', '!!!!!!!!!!', '????????' ];
var currentText = 0;

setInterval(function(){
  currentText = currentText + 1;

    if (currentText >= greeting.length) {
      currentText = 0;
    }
  $('body').text(greeting[currentText]);
},150);



});
