/**********************************************

Final Project
Emma Spellacy


**********************************************/

$(document).ready(function () {






//
  $(".text_intro").each(function() {
    $(this).delay(1000).fadeIn(2000);
    // $(this).delay(2000).fadeOut('slow');
  });

  $(".answer").each(function(index) {
    $(this).delay(3000).fadeIn(3000);
    // $(this).delay(2000).fadeOut('slow');
  });

  $(".yes").click(function(){
    console.log("Lets Talk");

    responsiveVoice.speak("Glad we can talk together now. Just click the down arrowkey on your computer and we can help you on your way.", "UK English Female", {rate: .75, pitch:.90});
  })

  $(".no").click(function(){
    console.log("Lets Talk");

    responsiveVoice.speak("Wow. Ok. Guess you can deal with your own problems then. Go have fun sorting your daddy issues by yourself you little ingrate.", "UK English Female", {rate: .85});
  })












// **************  KEYBOARD STUFF ********************************
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

  // if (annyang) {
  // // Let's define our first command. First the text we expect, and then the function it should call
  // var commands = {
  //   'show tps report': function() {
  //     $('#tpsreport').animate({bottom: '-100px'});
  //   }
  // };
  //
  // // Add our commands to annyang
  // annyang.addCommands(commands);
  //
  // // Start listening. You can call this here, or attach this call to an event, button, etc.
  // annyang.start();











});
