/**********************************************

DART 450, Winter 2018
Title of Project
Author

Description of what the script does...

**********************************************/

$(document).ready(function () {

//   new Vivus('practice', {
//     type: 'delayed',
//     duration: 200,
//     animTimingFunction: Vivus.EASE
// });

  var myVivus = new Vivus('practice', {
    start: 'manual',
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
  });
  myVivus.play(1, function() {
    // called after the animation completes
  })

  // alternativly if you leave the speed param blank and use the default, you
  // can pass the callback as the first parameter like so.



});
