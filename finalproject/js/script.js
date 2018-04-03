/**********************************************

Final Project
Emma Spellacy

This script creates page navigation,
contains repsonse voice, annyang, and small animations


**********************************************/
var inMenu = true;

$(document).ready(function () {


// fades in welcome message and answers
  $(".text_intro").each(function() {
    $(this).delay(1000).fadeIn(2000);
    // $(this).delay(2000).fadeOut('slow');
  });

  $(".answer").each(function(index) {
    $(this).delay(3000).fadeIn(3000);
    // $(this).delay(2000).fadeOut('slow');
  });

//  Intro, when user clicks 'yes', computer resonds happilly.
  $(".yes").click(function(){
    console.log("Lets Talk");

    responsiveVoice.speak("Glad we can talk together now. Press on the down arrow key on your device so we can get started!", "UK English Female", {rate: .75});
  })
// intro, when user clicks 'no', computer responds poorly, says mean message, and closes the window.
  $(".no").click(function(){

      console.log("BYE!");

      responsiveVoice.speak("Wow. Ok. Guess you can deal with your own problems. Goodbye you little ingrate!", "UK English Female", {rate: .75});
      setTimeout(function(){
      window.close();

    },7000);

  })



// **************  KEYBOARD STUFF ********************************
// prints out which key has been pressed
  $(document).keydown(function() {
    console.log(event.which);

// scrolls to next div if right key has been pressed.
  if(event.which == 39 && inMenu){
      $('body, html').animate({
        scrollLeft: "+=" + $(window).width()
      },1000);
  }
  });

// scrolls downwards when bottom key is pressed.
  $(document).keydown(function() {
    console.log(event.which);

  if(event.which == 40 && inMenu){
      $('html').animate({
        scrollTop: "+=" + $(window).height()
      },
      {
        // complete: robotCommentary
      },1000);
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

  // scrolls right if right key has been pressed.
    // $(document).keydown(function() {
    //   console.log(event.which);
    //
    // if(event.which == 37){
    //     $('body, html').animate({
    //       scrollLeft: "-=" + $(window).width()
    //     },1000);
    //
    //
    // }
    // });

// RESPONSIVE VOICE AND ANNYANG SCENARIOS 
    var correctAnnyangPhrase = '';
    var correctResponse = '';
    var incorrectResponse = '';


      // Make sure annyang is available...
      if (annyang) {

        var command = {

          "*words": handleUserSpeech,

        };

        // Now we've defined the commands we give them to annyang
        // by using its .addCommands() function.
        annyang.addCommands(command);

        // Finally we tell annyang to start listening with its
        // .start() function
        annyang.start();
        annyang.pause();




      }
    });

    function setupCleanRoomAnnyang() {
      correctAnnyangPhrase = "clean up your room";
      correctResponse = "That's right. Now your roomate is cleaning your room and crying!";
      incorrectResponse = "That's not right. Your roommate sneers and walks away!";
      annyang.resume();
    }

    function setupBreakUpAnnyang() {
      correctAnnyangPhrase = "i don't want to see you anymore";
      correctResponse = "You're all broken up!";
      incorrectResponse = "Together forever!";
      annyang.resume();
    }


    // handleUserSpeech(phrase)

    function handleUserSpeech(phrase) {

      phrase = phrase.toLowerCase();
      console.log(phrase);
      if (phrase === correctAnnyangPhrase) {
        responsiveVoice.speak(correctResponse);
      }
      else {
        responsiveVoice.speak(incorrectResponse);
      }

      return;

    }






// This function dictates what the computer says during each new section in the response process for each option.

  // dishes scenario
  if($("#dishes").visible()){
    responsiveVoice.speak("Say after me, clean up your room!","UK English Female"
    {
        onend: setupCleanRoomAnnyang
    });
    function handleUserSpeech()
  }
// breakup scenario
  else if($("#dishes01").visible()){
    responsiveVoice.speak("Say after me, i don't want to see you anymore!","UK English Female"
    {
        onend: setupBreakUpAnnyang
    });
    function handleUserSpeech()

}
//  house burnt down scanario



};
