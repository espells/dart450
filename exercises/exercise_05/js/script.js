/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

//Lines 15-31 control background color flashing.
// Declare our array of colours
var colours = ['red','blue','green','orange','pink','violet','yellow'];
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
  },100);

var text = ['HELLO', 'BONJOUR', 'CIAO', 'ALLO'];
var currentText = 0; //"0" is the place in line according to the array.

  setInterval(function(){
    currentText = currentText + 1;

    if (currentText >= text.length) {
      currentText = 0;
    }
  },1000);

});
