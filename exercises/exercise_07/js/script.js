/**********************************************

Exrcise 07- Final Practice
Emma Spellacy

lets user navigate with arrow keys on keyboard.

**********************************************/

$(document).ready(function () {

//  slow fade in of text, each line individually, with same class. 
  $(".text_intro").each(function(index) {
    $(this).delay(2000*index).fadeIn(2000);
});

// prints out which key has been pressed
  $(document).keydown(function() {
    console.log(event.which);

// scrolls to next div if right key has been pressed.
  if(event.which == 39){
      $('body, html').animate({
        scrollLeft: "+=" + $(window).width()
      },1000);
  }
  });
// scrolls backwards if right key has been pressed.
  $(document).keydown(function() {
    console.log(event.which);

  if(event.which == 37){
      $('body, html').animate({
        scrollLeft: "-=" + $(window).width()
      },1000);
  }
  });
// scrolls downwards when bottom key is pressed.
  $(document).keydown(function() {
    console.log(event.which);

  if(event.which == 40){
      $('body, html').animate({
        scrollTop: "+=" + $(window).height()
      },2000);
  }
  });
  // scrolls upwards when top key is pressed.
  $(document).keydown(function() {
    console.log(event.which);

  if(event.which == 38){
      $('body, html').animate({
        scrollTop: "-=" + $(window).height()
      },2000);
  }
  });







});
